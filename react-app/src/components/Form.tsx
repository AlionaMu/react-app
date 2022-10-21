import React from 'react';

export interface FormInfo {
  input: string;
  date: string;
  gender: string;
  img: string;
  checkbox: boolean;
  select: string;
}

function validate(input: string, gender: string, date: string, img: string, select: string) {
  const errors: string[] = [];

  if (!input) {
    errors.push('Name can\'t be empty');
  }

  if (!gender) {
    errors.push('Gender can\'t be empty');
  }
  
  if (!date) {
    errors.push('Date can\'t be empty');
  }

  if (!img) {
    errors.push('Upload file please');
  }

  if (select === 'Select country') {
    errors.push('Select country please');
  }

  return errors;
}

export class Form extends React.Component<Record<any, any>> {  
  public input: any;
  public date: any;
  public gender: any;
  public checkbox: any;
  public switchMale: any;
  public switchFemale: any;
  public img: any;
  public card: FormInfo;
  public select: any;
  public options: any[];
  
  constructor(props: any) {
    super(props);
    this.input = React.createRef();
    this.date = React.createRef();
    this.checkbox = React.createRef();
    this.switchMale = React.createRef();
    this.switchFemale = React.createRef();
    this.img = React.createRef();
  
    this.select = React.createRef();
    this.options = [
     {value: 'Belarus', title: 'Belarus'},
     {value: 'India', title: 'India'},
     {value: 'Australia', title: 'Australia'},
     {value: 'Venesuela', title: 'Venesuela'},
    ];

    this.state = {
      errors: [],
      disabled: true
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setButtonAble = this.setButtonAble.bind(this);
  
    this.card = {
       input: this.input,
       date: this.date,
       gender: this.gender,
       img: this.img,
       checkbox: this.checkbox,
       select: this.select
     };
  }

  setButtonAble() {
    this.setState({...this.state, disabled: false });
  }
  
  handleSubmit(event: any) {
    event.preventDefault();
    this.switchMale.current.checked === true ?
    this.gender = 'male' :
    this.switchFemale.current.checked ?
    this.gender = 'female' : ''

    this.card.gender = this.gender;
    this.card.input = this.input.current.value;
    this.card.date = this.date.current.value;
    this.card.img = URL.createObjectURL(this.img.current?.files?.[0])
    this.card.checkbox = this.checkbox.current.checked;
    this.card.select = this.select.current.value;
    
    const errors: string[] = validate(this.card.input, this.card.gender, this.card.date, this.card.img, this.card.select );
    if (errors.length > 0) {
      this.setState({...this.state, errors: errors }); 
      return;
    } else { this.props.create(event, this.card) }

  }

  render() {
    const { errors } = this.state as any;
    const { disabled } = this.state as any;

    return (
        <form className="form" onSubmit={this.handleSubmit} onChange={this.setButtonAble}>
            {errors.map((error: any) => (
          <p className="form__error" key={error}>Error: {error}</p>
        ))}
          <label>
            Name:
            <input type="text" ref={this.input} className="form__input" />
          </label>
          <label>
            Date:
            <input type="date" ref={this.date} className="form__input" />
          </label>
          <fieldset>
            <label className="form__switch">
              Male
              <input value="male" name="gender" type="radio" ref={this.switchMale} /> 
            </label>
            <label className="form__switch">
              Female
              <input value="female" name="gender" type="radio" ref={this.switchFemale} />
            </label>
          </fieldset>
          <select ref={this.select}>
            <option>Select country</option>
              {this.options.map((option: any) =>
              <option value={option.value} key={option.value}>
               {option.title}
              </option>
            )}
          </select>
          <p>Do you agree to the processing of data?</p>
          <label className="form__checkbox">
            <input type="checkbox" ref={this.checkbox} />
          </label>
          <label>
            Upload file:
            <input className='form__file-input' type="file" ref={this.img} />
          </label>
          <input type="submit" value="Submit" className='button form__button' disabled={disabled} />
        </form>
    );
  }
}

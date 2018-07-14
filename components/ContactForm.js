var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <form className={'contactForm'}>

        <div className={'form-group'}>        
          <input className={'form-control'} type={'text'} placeholder={'Imię'} value={this.props.contact.Name} />
        </div>

        <div className={'form-group'}>
          <input className={'form-control'} type={'text'} placeholder={'lastName'} value={this.props.contact.lastName} />
        </div>

        <div className={'form-group'}>       
          <input className={'form-control'} type={'email'} placeholder={'Email'} value={this.props.contact.email} />
        </div>

        <p>
          <button className={'btn btn-success'} type={'submit'}>Dodaj kontakt</button>
        </p>

      </form>
    )
  },
})
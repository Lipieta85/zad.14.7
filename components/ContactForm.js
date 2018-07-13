var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <form className={'contactForm'}>
        <input className={'input-name'} type={'text'} placeholder={'Imię'} value={this.props.contact.Name} />
        <input className={'input-lastName'} type={'text'} placeholder={'lastName'} value={this.props.contact.lastName} />}
        <input className={'input-email'} type={'email'} placeholder={'Email'} value={this.props.contact.email} />
        <button type={'submit'}>Dodaj kontakt</button>
      </form>
    )
  },
})
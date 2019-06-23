module.exports = {
  error: {
    length: 'Length should be a valid positive number',
    password: 'Password should be a valid string',
    min: 'minimum 8 znaków',
    uppercase: 'przynajmniej jedną wielką literę',
    lowercase: 'przynajmniej jedną małą literę',
    digits: 'przynajmniej jedną cyfrę'
  },
  regex: {
    digits: /\d+/,
    letters: /[a-zA-Z]+/,
    uppercase: /[A-Z]+/,
    lowercase: /[a-z]+/,
    symbols: /[`~\!@#\$%\^\&\*\(\)\-_\=\+\[\{\}\]\\\|;:'",<.>\/\?€£¥₹]+/,
    spaces: /[\s]+/
  }
};

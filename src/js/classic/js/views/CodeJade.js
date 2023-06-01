Ext.define('Tualo.form.field.CodeJade', {
  extend: 'Tualo.form.field.CodeMirror',
  mode: 'jade',
  lineNumbers: true,
  lang: function(){
    return CodeMirror.languages.javascript()
  },
  alias: ['widget.tualocodejadeX']
})

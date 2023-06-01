Ext.define('Tualo.form.field.CodeSql', {
  extend: 'Tualo.form.field.CodeMirror',
  mode: 'text/x-mariadb',
  lineNumbers: true,
  lang: function(){
    return CodeMirror.languages.sql()
  },
  alias: ['widget.tualocodesql']
})

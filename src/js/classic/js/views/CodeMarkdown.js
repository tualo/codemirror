Ext.define('Tualo.form.field.CodeMarkdown', {
  extend: 'Tualo.form.field.CodeMirror',
  mode: 'markdown',
  lineNumbers: true,
  lang: function(){
    return CodeMirror.languages.markdown()
  },
  alias: ['widget.tualocodemarkdown']
})

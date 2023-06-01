Ext.define('Tualo.form.field.CodeHtml', {
  extend: 'Tualo.form.field.CodeMirror',
  mode: 'html',
  lineNumbers: true,
  lang: function(){
    return CodeMirror.languages.html()
  },
  alias: ['widget.tualocodehtml']
})

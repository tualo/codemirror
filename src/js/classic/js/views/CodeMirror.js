Ext.define('Tualo.form.field.CodeMirror', {
  extend: 'Ext.form.field.TextArea',

  alias: ['widget.tualocodemirror'],

  fieldSubTpl: [ // note: {id} here is really {inputId}, but {cmpId} is available 
    '<textarea id="{id}" data-ref="inputEl" type="{type}" {inputAttrTpl}',
        ' size="1"', // allows inputs to fully respect CSS widths across all browsers 
        '<tpl if="name"> name="{name}"</tpl>',
        '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>',
        '{%if (values.maxLength !== undefined){%} maxlength="{maxLength}"{%}%}',
        '<tpl if="readOnly"> readonly="readonly"</tpl>',
        '<tpl if="disabled"> disabled="disabled"</tpl>',
        '<tpl if="tabIdx != null"> tabindex="{tabIdx}"</tpl>',
        '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
        '<tpl foreach="inputElAriaAttributes"> {$}="{.}"</tpl>',
    ' class="{fieldCls} {typeCls} {typeCls}-{ui} {editableCls} {inputCls}" autocomplete="off"/>',
    '<tpl if="value">{[Ext.util.Format.htmlEncode(values.value)]}"</tpl>',
    '</textarea>',
    {
        disableFormats: true
    }
  ],
  config:{
    mode: 'text'
  },
  lang: function(){
    return CodeMirror.languages.markdown()
  },

  initComponent: function(){
    var me = this;
    me.callParent();
  },

  afterRender: function () {
    var me = this;
    me.callParent(arguments);
    try{
      me.createEditor();
      //me.createCM();
      // console.log('code mirror here')
    }catch(e){
      console.error(e);
    }
  },

  createState: function(v){
    // console.log('createState');
    let st = CodeMirror.EditorState.create({
      doc: v,
      extensions: [
        CodeMirror.basicSetup,
        CodeMirror.EditorView.lineWrapping,
        this.cmUpdateListener,
        this.lang(),
        CodeMirror.keymap.of([CodeMirror.indentWithTab])
        //CodeMirror.defaultKeymap,
      ]
    });
    return st
  },
  createEditor: function(){
    this._enabledRawValue = true;
    document.getElementById( this.id+'-inputEl' ).style.display='none';
    this.cmUpdateListener = CodeMirror.EditorView.updateListener.of((v) => {
      if (v.docChanged) {
        this._enabledRawValue=false;
        this.setValue(v.state.doc.toString());
        setTimeout( ()=>{
          this._enabledRawValue=true;
        },800);
        //  console.log('cmUpdateListener',arguments,v.docChanged,v);
      }
    });
    try{
      this.editor = new CodeMirror.EditorView({
        state: this.createState(''),
        parent:  document.getElementById( this.id+'-inputEl' ).parentNode
      });
      /*
      document.getElementById( this.id+'-inputEl' ).addEventListener('change',function(){
        console.log('changed',arguments)
      })
      */
      // window.cm = this;
      // window.editor=this.editor;
    }catch(e){
      console.error(e);
    }
  },

  onResize: function(w,h){
    this.callParent(arguments);
    // console.log(this.$className, 'onResize', this, arguments);
    this.codeeditor.setSize(w,h);
  },

  setRawValue: function(v){
    if (this._enabledRawValue){
      // console.log('setRawValue',arguments,v);
      this.editor.setState(this.createState(v));
    }
    this.callParent(arguments);
  },


  getValue: function(){
    // console.log('getValue',arguments,this.value);
    return this.value;
  },
  
  
});

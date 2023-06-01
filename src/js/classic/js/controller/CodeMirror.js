Ext.define('Ext.tualo.form.field.controller.CodeMirror', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tualocodemirror_controller',

  onBoxReady: function(me,width,height) {

    console.log('onBoxReady--->>>>',this);
    var config = {
    };
    if (this.view.lineNumbers){
      config.lineNumbers = this.view.lineNumbers;
    }
    if (this.view.mode){
      config.mode = this.view.mode;
    }
    config.value = this.view.items.getAt(0).getValue();
    this.cetxt = document.getElementById( this.view.items.getAt(0).getInputId() );

    this.codeeditor = CodeMirror.fromTextArea(this.cetxt, config);
    this.codeeditor.on('change',this.onCEChange.bind(this));
    this.codeeditor.setSize("100%", "100%");
  },
  onTxtChanged: function( txt, newValue, oldValue, eOpts ){
    console.log('onTxtChanged','---');
    if (this.internalChange!==true){
      this.view.setValue(newValue);
    }
  },
  onCEChange: function(){
    console.log('onCEChange','---');
    this.internalChange=true;
    this.view.items.getAt(0).setValue(this.codeeditor.doc.getValue());
    this.internalChange=false;
  },
  onResize: function(me){
    console.log('onResize','---');
    var region = this.view.getViewRegion( );
    var ce = this.codeeditor;
    var w = region.right-region.left-(this.view.hasVisibleLabel()?this.view.labelWidth:0 )-this.view.labelPad;
    var h = region.bottom-region.top;
    
    if (this.getView().fitParent===true){
      ce.setSize(w,h);
    }
    this.cetxt.parentNode.parentNode.parentNode.parentNode.style.width=w+'px';
    this.cetxt.parentNode.parentNode.parentNode.parentNode.style.height=h+'px';
    
  }

});

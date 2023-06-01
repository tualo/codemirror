
let tpl='insert ignore into custom_types (    vendor,    name,    id,    xtype_long_classic,    extendsxtype_classic,    xtype_long_modern,    extendsxtype_modern)     values '+
'( "Tualo",     "#name", "#name",     "widget.#classic", "#basetype_classic",    "widget.textarea",  "Ext.field.Text" ) '+
'on duplicate key update id=values(id),    xtype_long_classic=values(xtype_long_classic),    extendsxtype_classic=values(extendsxtype_classic),    name=values(name),    vendor=values(vendor);';
let l=[];
for( c in Ext.tualo.form.field) { 
    console.log(c)
    try{
        let s = tpl.replace('#classic',Ext.tualo.form.field[c].xtype);
        s = s.replace('#basetype_classic',Ext.tualo.form.field[c].superclass.$className);
        s = s.replace('#name','Ext.tualo.form.field.'+c);
        l.push(s);
    }catch(e){
        console.info(c,'error');
    }
}

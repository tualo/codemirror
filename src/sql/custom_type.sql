
insert ignore into custom_types 

(
    vendor,
    name,
    id,
    xtype_long_classic,
    extendsxtype_classic,

    xtype_long_modern,
    extendsxtype_modern

    
) 
    values 
(
    'Tualo', -- vendor
    'Tualo.form.field.CodeMirror', -- id
    'Tualo.form.field.CodeMirror', -- displayname

    'widget.tualocodemirror', -- xtype classic
    'Ext.form.field.TextArea', -- basetype classic

    'widget.textarea', -- xtype modern
    'Ext.field.Text', -- basetype modern
) 
on duplicate key update 
    id=values(id),
    xtype_long_classic=values(xtype_long_classic),
    xtype_long_modern=values(xtype_long_modern),
    extendsxtype_classic=values(extendsxtype_classic),
    extendsxtype_modern=values(extendsxtype_modern),
    name=values(name),
    vendor=values(vendor)
;


-- ########################################################


insert ignore into custom_types 

(
    vendor,
    name,
    id,
    xtype_long_classic,
    extendsxtype_classic,

    xtype_long_modern,
    extendsxtype_modern

    
) 
    values 
(
    'Tualo', -- vendor
    'Tualo.form.field.CodeSql', -- id
    'Tualo.form.field.CodeSql', -- displayname

    'widget.tualocodesql', -- xtype classic
    'Ext.form.field.Base', -- basetype classic

    'widget.textarea', -- xtype modern
    'Ext.field.Text' -- basetype modern
) 
on duplicate key update 
    id=values(id),
    xtype_long_classic=values(xtype_long_classic),
    xtype_long_modern=values(xtype_long_modern),
    extendsxtype_classic=values(extendsxtype_classic),
    extendsxtype_modern=values(extendsxtype_modern),
    name=values(name),
    vendor=values(vendor)
;


-- ########################################################


insert ignore into custom_types 

(
    vendor,
    name,
    id,
    xtype_long_classic,
    extendsxtype_classic,

    xtype_long_modern,
    extendsxtype_modern

    
) 
    values 
(
    'Tualo', -- vendor
    'Tualo.form.field.CodeMarkdown', -- id
    'Tualo.form.field.CodeMarkdown', -- displayname

    'widget.tualocodemarkdown', -- xtype classic
    'Ext.form.field.Base', -- basetype classic

    'widget.textarea', -- xtype modern
    'Ext.field.Text' -- basetype modern
) 
on duplicate key update 
    id=values(id),
    xtype_long_classic=values(xtype_long_classic),
    xtype_long_modern=values(xtype_long_modern),
    extendsxtype_classic=values(extendsxtype_classic),
    extendsxtype_modern=values(extendsxtype_modern),
    name=values(name),
    vendor=values(vendor)
;


-- ########################################################


insert ignore into custom_types 

(
    vendor,
    name,
    id,
    xtype_long_classic,
    extendsxtype_classic,

    xtype_long_modern,
    extendsxtype_modern

    
) 
    values 
(
    'Tualo', -- vendor
    'Tualo.form.field.CodeJade', -- id
    'Tualo.form.field.CodeJade', -- displayname

    'widget.tualocodejade', -- xtype classic
    'Ext.form.field.Base', -- basetype classic

    'widget.textarea', -- xtype modern
    'Ext.field.Text' -- basetype modern
) 
on duplicate key update 
    id=values(id),
    xtype_long_classic=values(xtype_long_classic),
    xtype_long_modern=values(xtype_long_modern),
    extendsxtype_classic=values(extendsxtype_classic),
    extendsxtype_modern=values(extendsxtype_modern),
    name=values(name),
    vendor=values(vendor)
;

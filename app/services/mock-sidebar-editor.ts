export const SidebarEditorData: any = {
  borderLeft: "size?Width select?Style:@borderTypeSelect color disableable",
  borderRight: "size?Width select?Style:@borderTypeSelect color disableable",
  borderTop: "size?Width select?Style:@borderTypeSelect color disableable",
  borderBottom: "size?Width select?Style:@borderTypeSelect color disableable",
  borderRadius: "size?Radius",
  color: "color",
  backgroundColor: "color",
  backgroundColorHover: 'color',
  fontSize: 'size?Size',
  textAlign: 'select?Align:left|right|center|justify|inital|inherit',
  textDecoration: 'select?Decoration:none|underline|overline|line-through|inital|inherit',
  fontStyle: 'select:normal|italic|oblique|inital|inherit',
  textIndent: 'size',
  textShadow: 'size size size color disableable',
  fontWeight: 'select:normal|bold|bolder|light|lighter',
  minWidth: 'size',
  width: 'size',
  maxWidth: 'size',
  minHeight: 'size',
  height: 'size',
  maxHeight: 'size',
  marginLeftIncrease: 'number',
  marginTop: "size",
  borderTypeSelect:"solid|dotted|dashed|double|groove|ridge|inset|outset|none|hidden"
};

/*
borderLeft: size select:solid|dotted|xxx color
borderLeft: size select:@borderTypeSelect
borderTypeSelect: solid|dotted|xxx
 */

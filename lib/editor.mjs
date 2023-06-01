import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"
import {markdown} from "@codemirror/lang-markdown"
import {sql} from "@codemirror/lang-sql"
import {html} from "@codemirror/lang-html"
import { drawSelection, highlightActiveLine, keymap } from '@codemirror/view';
import { EditorState, Prec } from '@codemirror/state';
import { history, historyKeymap } from '@codemirror/history';
import { indentOnInput, indentUnit } from '@codemirror/language';
import { lineNumbers } from '@codemirror/gutter';
import { defaultKeymap, indentMore, indentLess,indentWithTab } from '@codemirror/commands';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { rectangularSelection } from '@codemirror/rectangular-selection';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { Line } from "@codemirror/text";
import { EditorSelection } from '@codemirror/state';



import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

/*

export const PUGLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        LineComment: t.lineComment,
        "( )": t.paren
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "//"}
  }
})

function pug() {
  return new LanguageSupport(PUGLanguage)
}*/

window.CodeMirror={
  EditorView: EditorView,
  EditorState: EditorState,
  EditorSelection: EditorSelection,
  Line: Line,
  lineNumbers: lineNumbers,
  history: history,
  historyKeymap: historyKeymap,
  drawSelection: drawSelection,
  highlightActiveLine: highlightActiveLine,
  indentOnInput: indentOnInput,
  highlightSelectionMatches: highlightSelectionMatches,
  keymap: keymap,
  indentMore: indentMore, 
  indentWithTab: indentWithTab,
  indentLess: indentLess, 
  basicSetup: basicSetup,
  languages: {
      javascript:javascript,
      sql: sql,
      markdown: markdown,
      
      html: html
  }
}
/**
 * SyntaxHighlighter Syntax for Kotlin
 *
 * @version
 * 0.3.0 (March 31, 2017)
 *
 * @copyright
 * Copyright (C) 2017 MasuqaT. http://masuqat.net/
 * Copyright (C) 2016 Erik C. Thauvin. http://erik.thauvin.net/
 * Copyright (C) 2004-2010 Alex Gorbatchev. http://alexgorbatchev.com/SyntaxHighlighter
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
    // CommonJS
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush()
    {
        var keywords =  'abstract annotation as break by catch class companion const constructor continue' +
                        ' crossinline data do dynamic else enum external false final finally for fun get if' +
                        ' import in infix init inline inner interface internal is lateinit noinline null object' +
                        ' open operator out override package private protected public reified return sealed' +
                        ' set super tailrec this throw trait true try type val var vararg when where while' +
						' typealias' + // Kotlin 1.1
                        ' String Array Unit Int Boolean';

        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },                     // one line comments
            { regex: /\/\*([^\*][\s\S]*)?\*\//gm, css: 'comments' },                                        // multi-line comments
            { regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm, css: 'preprocessor' },                                 // documentation comments
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },                        // strings
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },                        // strings
            { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: 'value' },                                 // numbers
            { regex: /\@(Target|Retention|Repeatable|MustBeDocumented|Test|Deprecated)/g, css: 'color2' },  // annotations
            { regex: /\@(file|property|field|get|set|receiver|param|setparam|delegate):/g, css: 'color2' }, // User-site Targets  
            { regex: /\@(Inject)\b/g, css: 'color3' },                                                      // @Inject annotation
            { regex: new RegExp(this.getKeywords(keywords), 'gm'),  css: 'keyword' }                        // java keyword
            ];

        this.forHtmlScript({
            left    : /(&lt;|<)%[@!=]?/g,
            right   : /%(&gt;|>)/g
        });
    };

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['kt', 'kotlin'];

    SyntaxHighlighter.brushes.Kotlin = Brush;

    // CommonJS
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
<?php
/**
* Plugin Name: SyntaxHighlighter Evolved: Kotlin Brush
* Description: Adds support for the Kotlin language to the SyntaxHighlighter Evolved plugin.
* Author: MasuqaT
* Version: 1.0.0
* Author URI: http://masuqat.net/
* Plugin URI: https://github.com/MasuqaT-NET/SyntaxHighlighterEvolved-KotlinBrush
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_kotlin_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_kotlin_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_kotlin_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-kotlin', plugins_url( 'shBrushKotlin.js', __FILE__ ), array('syntaxhighlighter-core'), '1.2.3' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_kotlin_addlang( $brushes ) {
    $brushes['kt'] = 'kotlin';
    $brushes['kotlin'] = 'kotlin';
 
    return $brushes;
}
 
?>
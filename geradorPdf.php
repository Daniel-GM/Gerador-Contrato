<?php
/*
Plugin Name: Gerador PDF
Plugin URI: https://daniel-gm.github.io/Gerador-Contrato/
Description: Plugin para pegar os dados dos cliente e gerar o contrato.
Version: 1.0
Author: Daniel
Author URI: https://github.com/Daniel-GM
License: GPL2
*/

/* js */
function meu_plugin_enqueue_scripts() {
  wp_enqueue_script( 'meu-plugin-script', plugins_url( 'js/gerarPdf.js', __FILE__ ), array( 'jquery' ) );
  wp_enqueue_script( 'meu-plugin-edit-contrato', plugins_url( 'js/editContrato.js', __FILE__ ), array( 'jquery' ) );
  wp_enqueue_script( 'meu-plugin-radio-input', plugins_url( 'js/radioInput.js', __FILE__ ), array( 'jquery' ) );
  wp_enqueue_script( 'meu-plugin-formatacao-pdf', plugins_url( 'js/formataPdf.js', __FILE__ ), array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'meu_plugin_enqueue_scripts' );

/* css */
function meu_plugin_enqueue_styles() {
  wp_enqueue_style( 'meu-plugin-assinatura', plugins_url( 'css/assinatura.css', __FILE__ ) );
  wp_enqueue_style( 'meu-plugin-style', plugins_url( 'css/campos.css', __FILE__ ) );
  wp_enqueue_style( 'meu-plugin-texto', plugins_url( 'css/texto.css', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'meu_plugin_enqueue_styles' );

function geradorPdf(){
  include(plugin_dir_path(__FILE__) . 'index.html');
}
add_shortcode('gerador-pdf','geradorPdf');
?>
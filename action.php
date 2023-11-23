<?php
require_once 'vendor/autoload.php';
require_once 'includes/_functions.php';
include 'includes/_db.php';

if (!isset($_REQUEST['action'])) addErrorAndExit('No action');

session_start();
checkCSRF('index.php');
checkXSS($_REQUEST);
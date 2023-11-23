<?php
// ---------- SECURITY FUNCTIONS

/**
 * Generate a valid token in $_SESSION
 *
 * @return void
 */
function generateToken(): void
{
    if (
        !isset($_SESSION['token'])
        || time() > $_SESSION['tokenExpiry']
    ) {
        $_SESSION['token'] = md5(uniqid(mt_rand(), true));
        $_SESSION['tokenExpiry'] = time() + 15 * 60;
    }
}

/**
 * Check for CSRF with referer and token
 * Redirect to the given page in case of error
 *
 * @param array $data
 * @return void
 */
function checkCSRF(string $url): void
{
    if (
        !isset($_SERVER['HTTP_REFERER'])
        || !str_contains($_SERVER['HTTP_REFERER'], 'http://localhost/book_time/')
    ) {
        $_SESSION['error'] = 'error_referer';
    } else if (
        !isset($_SESSION['token'])
        || !isset($_REQUEST['token'])
        || $_SESSION['token'] !== $_REQUEST['token']
        || time() > $_SESSION['tokenExpiry']
    ) {
        $_SESSION['error'] = 'error_token';
    }

    if (!isset($_SESSION['error'])) return;

    header('Location:' . $url);

    exit;
}

/**
 * ASYNC
 * Check for CSRF with referer and token
 *
 * @param array $data
 * @return void
 */
function checkCSRFAsync(array $data): void
{
    if (
        !isset($_SERVER['HTTP_REFERER'])
        || !str_contains($_SERVER['HTTP_REFERER'], 'http://localhost/book_time/')
    ) {
        $error = 'error_referer';
    } else if (
        !isset($_SESSION['token'])
        || !isset($data['token'])
        || $_SESSION['token'] !== $data['token']
        || time() > $_SESSION['tokenExpiry']
    ) {
        $error = 'error_token';
    }

    if (!isset($error)) return;

    echo json_encode([
        'result' => false,
        'error' => $error
    ]);

    exit;
}

/**
 * Apply treatment on given array to prevent XSS
 *
 * @param array $array
 * @return void
 */
function checkXSS(array &$array): void
{
    $array = array_map('strip_tags', $array);
}


// ---------- NOTIFICATIONS
    // ---------- ADD

/**
 * Add an error to display and stop script
 *
 * @param string $error
 * @return void
 */
function addErrorAndExit(string $error): void
{
    $_SESSION['error'] = $error;
    header('Location: index.php');
    exit;
}

/**
 * Add a message to display
 *
 * @param string $msg
 * @return void
 */
function addNotif(string $msg): void
{
    $_SESSION['msg'] = $msg;
}

/**
 * ASYNC
 * Add an error to display and stop script
 *
 * @param string $error
 * @return void
 */
function throwAsyncError(string $error): void
{
    echo json_encode([
        'result' => false,
        'error' => $error
    ]);
    exit;
}

    // ---------- GET

function getNotifHtml(): string {
    $html = '<ul class="notif-cntnr">';

    if (isset($_SESSION['msg'])) {
        $html .= '<li class="notif"><div class="notif-content"><img src="img/check-icon.svg" alt="check icon" class="check"><div class="msg-txt"><p class="txt-1"></p><p class="txt-2">'.$_SESSION['msg'].'</p></div></div><img src="img/close-icon.svg" alt="close icon" class="close"><div class="notif-progress"></div></li>';
        unset($_SESSION['msg']);
    }

    if (isset($_SESSION['error'])) {
        $html .= '<li class="notif"><div class="notif-content"><img src="img/check-icon.svg" alt="check icon" class="check"><div class="msg-txt"><p class="txt-1"></p><p class="txt-2">'.$_SESSION['error'].'</p></div></div><img src="img/close-icon.svg" alt="close icon" class="close"><div class="notif-progress"></div></li>';
        unset($_SESSION['error']);
    }

    $html .= '</ul>';

    return $html;
}
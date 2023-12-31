<?php
require_once 'vendor/autoload.php';
require_once 'includes/_functions.php';
include 'includes/_db.php';

session_start();
generateToken();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==" crossorigin="anonymous" referrerpolicy="no-referrer"> -->
    <link rel="stylesheet" href="style.css">
    <title>Book Time</title>
</head>

<body id="data" data-token="<?= $_SESSION['token'] ?>">
    <div class="background">
        <ul id="notifList" class="notif-cntnr">
            <!-- <li class="notif">
                <div class="notif-content"><img src="img/check-icon.svg" alt="check icon" class="check">
                    <div class="msg-txt">
                        <p class="txt-1">Success</p>
                        <p class="txt-2">Your changes have been saved</p>
                    </div>
                </div><img src="img/close-icon.svg" alt="close icon" class="close">
                <div class="notif-progress"></div>
            </li> -->
        </ul>
        <header>
            <div class="header-cntnr">
                <a href="#" class="header-content">
                    <img src="img/light-bt-logo.png" alt="Book Time logo" class="header-logo">
                    <div class="header-txt">
                        <h1 class="header-ttl">Book
                            <br>Time
                        </h1>
                    </div>
                </a>
            </div>
        </header>
        <main>
            <h2 class="page-ttl">Bienvenue !</h2>
            <section id="carousel">
                <div class="carousel-cntnr">
                    <div class="carousel">
                        <div class="carousel-content">
                            <div class="add-cntnr slide">
                                <h3 class="add-ttl">Ajouter un livre</h3>
                                <p class="add-txt">Quel livre avez-vous lu aujourd'hui ?</p>
                                <div><img src="img/add-icon1.svg" alt="green add icon" class="add-icon-1"></div>
                            </div>
                            <div class="currently-cntnr slide">
                                <div class="progress bar-cntnr">
                                    <div class="progress bar"></div>
                                    <img src="img/bookmark-icon.png" alt="bookmark icon" class="bookmark-icon">
                                </div>
                                <h3 class="book-ttl">L'Alliance des Trois</h3>
                                <p class="book-author">Maxime Chattam</p>
                                <img src="img/l-alliance-des-trois.jpeg" alt="L'Alliance des Trois book cover" class="reading-cover">
                            </div>
                            <div class="currently-cntnr slide">
                                <div class="progress bar-cntnr">
                                    <div class="progress bar"></div>
                                    <img src="img/bookmark-icon.png" alt="bookmark icon" class="bookmark-icon">
                                </div>
                                <h3 class="book-ttl">L'Étranger</h3>
                                <p class="book-author">Albert Camus</p>
                                <img src="img/l-etranger.jpg" alt="L'Étranger book cover" class="reading-cover">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-controls">
                        <button id="prev" class="arrow prev"><img src="img/prev-icon.svg" alt="previous icon"></button>
                        <button id="next" class="arrow next"><img src="img/next-icon.svg" alt="next icon"></button>
                    </div>
                    <div class="carousel-dots">
                        <ul class="dot-list">
                            <li class="dot"></li>
                            <li class="dot"></li>
                            <li class="dot"></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="currentReading">
                <div class="reading-cntnr">
                    <div class="reading-txt">
                        <h4 class="reading-ttl">Vous lisez <span class="reading-nb">2</span> livres.</h4>
                        <p>Plus</p>
                    </div>
                    <div class="reading-covers">
                        <img src="img/l-alliance-des-trois.jpeg" alt="" class="small-reading first-cover">
                        <img src="img/the-hunger-games.jpg" alt="" class="small-reading next-cover">
                    </div>
                </div>
            </section>
            <section id="toRead">
                <div class="to-read-txt">
                    <h4 class="to-read-ttl">À lire</h4>
                    <div class="highlight-1"></div>
                </div>
                <p class="to-read-more">Plus</p>
                <div class="to-read-cntnr">
                    <div class="highlight-2"></div>
                    <div class="to-read-content">
                        <div class="to-read-covers">
                            <div class="add-cover">
                                <img src="img/add-icon2.svg" alt="grey add icon" class="add-icon-2">
                            </div>
                            <img src="img/blade-runner.jpg" alt="" class="read-cover">
                            <img src="img/l-etranger.jpg" alt="" class="read-cover">
                            <img src="img/le-dernier-jour-d-un-condamne.jpg" alt="" class="read-cover">
                            <img src="img/le-meilleur-des-mondes.jpg" alt="" class="read-cover">
                            <img src="img/orgueil-et-prejuges.jpg" alt="" class="read-cover">
                        </div>
                    </div>
                </div>
            </section>
            <section id="lists">
                <div class="to-read-txt">
                    <h4 class="to-read-ttl">Listes</h4>
                    <div class="highlight-1"></div>
                </div>
                <p class="to-read-more">Plus</p>
            </section>
        </main>
        <nav class="nav-bar">
            <div class="active-icon book">
                <img src="img/book-icon.svg" alt="book icon" class="nav-icon">
            </div>
            <img src="img/book-icon.svg" alt="book icon" class="nav-icon">
            <img src="img/search-icon.svg" alt="search icon" class="nav-icon">
            <img src="img/profile-icon.svg" alt="profile icon" class="nav-icon">
        </nav>
    </div>
    <script src="script.js"></script>
</body>

</html>
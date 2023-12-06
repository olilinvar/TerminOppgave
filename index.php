<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <?php
    include("db_connect.php");
    ?>
</head>

<body>
    <div class="flexWrap">
        <div class="topLeftWrap">
            <div class="top">
                <div id="bakeryname"></div>
            </div>
            <div class="left">
                <div id="cookiecount">0</div>
                <div id="cpsHTML"></div>
                <button id="btn"><img src="PerfectCookie.webp" alt="Cookie"></button>
            </div>
        </div>
        <div class="right">
            <div class="right-top"></div>
            <div class="right-bottom">
                <button class="building" id="1">
                    <div class="building-icon"><img src="GrandmaIconTransparent.webp" alt="Grandma"></div>
                    <div class="building-stats">
                        <div class="building-stats-box">
                            <div class="building-stats-box-top"><p>Grandma</p></div>
                            <div class="building-stats-box-bottom"><p><span id="grannyinfo_cost">20</span>&#127850;</p></div>
                        </div>
                        <div class="building-stats-amount" id="grannyinfo_owned">0</div>
                    </div>
                </button>
                <button class="building" id="2">
                    <div class="building-icon"><img src="FarmIconTransparent.webp" alt="Farm"></div>
                    <div class="building-stats">
                        <div class="building-stats-box">
                            <div class="building-stats-box-top"><p>Farm</p></div>
                            <div class="building-stats-box-bottom"><p><span id="farminfo_cost">600</span>&#127850;</p></div>
                        </div>
                        <div class="building-stats-amount" id="farminfo_owned">0</div>
                    </div>
                </button>
                <button class="building" id="3">
                    <div class="building-icon"><img src="MineIconTransparent.webp" alt="Mine"></div>
                    <div class="building-stats">
                        <div class="building-stats-box">
                            <div class="building-stats-box-top"><p>Mine</p></div>
                            <div class="building-stats-box-bottom"><p><span id="mineinfo_cost">10000</span>&#127850;</p></div>
                        </div>
                        <div class="building-stats-amount" id="mineinfo_owned">0</div>
                    </div>
                </button>
                <button class="building" id="4">
                    <div class="building-icon"><img src="FactoryIconTransparent.webp" alt="Factory"></div>
                    <div class="building-stats">
                        <div class="building-stats-box">
                            <div class="building-stats-box-top"><p>Factory</p></div>
                            <div class="building-stats-box-bottom"><p><span id="factoryinfo_cost">120000</span>&#127850;</p></div>
                        </div>
                        <div class="building-stats-amount" id="factoryinfo_owned">0</div>
                    </div>
                </button>
                <button class="building" id="5">
                    <div class="building-icon"><img src="BankIconTransparent.webp" alt="Bank"></div>
                    <div class="building-stats">
                        <div class="building-stats-box">
                            <div class="building-stats-box-top"><p>Bank</p></div>
                            <div class="building-stats-box-bottom"><p><span id="bankinfo_cost">1400000</span>&#127850;</p></div>
                        </div>
                        <div class="building-stats-amount" id="bankinfo_owned">0</div>
                    </div>
                </button>

            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>
<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Hello World</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                /*background-image: url("http://images.boomsbeat.com/data/images/full/209/jobs-jpg.jpg");
                background-size: 100% auto;
                background-repeat: no-repeat;*/
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div>
                    <img src="http://dreamatico.com/data_images/kitten/kitten-3.jpg" width="500px" height="auto">
                    <img src="https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg" width="500px" height="auto">
                    <img src="https://i.ytimg.com/vi/w6DW4i-mfbA/hqdefault.jpg" width="500px" height="auto">
                </div>
                <div>
                    <a href="http://178.62.119.51/">Hello World</a>
                    <a href="http://178.62.119.51/steve_jobs">Steve Jobs</a>
                    <a href="http://178.62.119.51/bio">Biography</a>
                </div>
            </div>
        </div>
    </body>
</html>

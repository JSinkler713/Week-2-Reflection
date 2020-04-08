const geddy = {name:"Geddy",
    favoriteHobby:"Fighting Crime", 
    profileImg:"string", 
    greeting:"I was born to the darkness", 
    funScale:1000000, 
    skills:['Detective',' Gamer','.. too many more']}


$('button').on('click', function(){
    // $('h2').eq(0).html(geddy.name);
    $('h2').eq(1).html('My true identity is ' + geddy.name);
    $('.greeting').html(geddy.greeting);
    $('.fav-hobby').html(geddy.favoriteHobby + ' and spitting rhymes');
    $('#fun-scale').html(geddy.funScale);
    $('.skills-list').html(geddy.skills);
}) 

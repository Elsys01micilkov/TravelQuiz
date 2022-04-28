var SpainScore = localStorage.getItem('SpainScore')
var locationScores = localStorage.getItem('locationScores')
var highScore = localStorage.getItem('highScore')
var highScoreDestination = localStorage.getItem('highScoreDestination')

console.log(highScoreDestination)
console.log(highScore)

var heading = document.getElementById("destination-name")
heading.innerHTML = ["Your perfect location: " + highScoreDestination]

var description = document.getElementById("destination-description")
var imageCollage = document.getElementById("destination-collage")
var bookLink = document.getElementById("bookbutton")

if(highScoreDestination=="Spain")
{
    description.innerHTML = ["- Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures.<br/><br/>- Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. <br/><br/>- Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church."]
    imageCollage.innerHTML = "<img src=\"images/spain.jpg\" width=\"500rem\" height=\"500rem\">"
    bookLink.href = "https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4ApHHopMGwAIB0gIkN2RmNTBkMTEtNjNjNi00ZTVlLThkMmMtMWNiZmYyMWE1OTBl2AIE4AIB&lang=en-gb&sid=067f718a8705b867685c5dd91de72b5b&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4ApHHopMGwAIB0gIkN2RmNTBkMTEtNjNjNi00ZTVlLThkMmMtMWNiZmYyMWE1OTBl2AIE4AIB%3Bsid%3D067f718a8705b867685c5dd91de72b5b%3Bsb_price_type%3Dtotal%3Bsrpvid%3D4db90e0f33b502cf%26%3B&ss=Spain&is_ski_area=&checkin_year=2022&checkin_month=5&checkin_monthday=1&checkout_year=2022&checkout_month=5&checkout_monthday=7&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=spain&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=197&dest_type=country&place_id_lat=39.9878&place_id_lon=-3.69817&search_pageview_id=48660f2c3cea0030&search_selected=true&search_pageview_id=48660f2c3cea0030&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0"
    bookLink.target = '_blank'
}
else if(highScoreDestination=="Malta")
{
    description.innerHTML = ["- Malta is an archipelago in the central Mediterranean between Sicily and the North African coast. <br/><br/>- It's a nation known for historic sites related to a succession of rulers including the Romans, Moors, Knights of Saint John, French and British. <br/><br/>- It has numerous fortresses, megalithic temples and the Ħal Saflieni Hypogeum, a subterranean complex of halls and burial chambers dating to circa 4000 B.C"]
    imageCollage.innerHTML = "<img src=\"images/malta.jpg\" width=\"500rem\" height=\"500rem\">"
    bookLink.href = "https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4ApHHopMGwAIB0gIkN2RmNTBkMTEtNjNjNi00ZTVlLThkMmMtMWNiZmYyMWE1OTBl2AIE4AIB&lang=en-gb&sid=067f718a8705b867685c5dd91de72b5b&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4ApHHopMGwAIB0gIkN2RmNTBkMTEtNjNjNi00ZTVlLThkMmMtMWNiZmYyMWE1OTBl2AIE4AIB%3Bsid%3D067f718a8705b867685c5dd91de72b5b%3Bsb_price_type%3Dtotal%26%3B&ss=Malta%2C+Malta&is_ski_area=&checkin_year=2022&checkin_month=5&checkin_monthday=1&checkout_year=2022&checkout_month=5&checkout_monthday=7&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=71f00e08ccbe00f0&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=3939&dest_type=region&place_id_lat=35.905697&place_id_lon=14.481546&search_pageview_id=71f00e08ccbe00f0&search_selected=true&region_type=island&ss_raw=malta"
    bookLink.target = '_blank'
}   

else if(highScoreDestination=="UK")
{
    description.innerHTML = ["<br/><br/>- The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. <br/><br/>- England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. <br/><br/>- England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge."]
    imageCollage.innerHTML = "<img src=\"images/uk.jpg\" width=\"500rem\" height=\"500rem\">"
    bookLink.href = "https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB&lang=en-gb&sid=067f718a8705b867685c5dd91de72b5b&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB%3Bsid%3D067f718a8705b867685c5dd91de72b5b%3Bsb_price_type%3Dtotal%26%3B&ss=United+Kingdom&is_ski_area=&checkin_year=2022&checkin_month=5&checkin_monthday=1&checkout_year=2022&checkout_month=5&checkout_monthday=7&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=uk&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=222&dest_type=country&place_id_lat=54.4983&place_id_lon=-3.07394&search_pageview_id=b257a6e2dd770236&search_selected=true&search_pageview_id=b257a6e2dd770236&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0"
    bookLink.target = '_blank'
}

else if(highScoreDestination=="Iceland")
{
    description.innerHTML = ["<br/><br/>- Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields.<br/><br/>- Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. <br/><br/>- Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history."]
    imageCollage.innerHTML = "<img src=\"images/iceland.jpg\" width=\"500rem\" height=\"500rem\">"
    bookLink.href = "https://www.booking.com/searchresults.en-gb.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB&lang=en-gb&sid=067f718a8705b867685c5dd91de72b5b&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Faid%3D304142%3Blabel%3Dgen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB%3Bsid%3D067f718a8705b867685c5dd91de72b5b%3Bsb_price_type%3Dtotal%3Bsrpvid%3Da46ea710722201ae%26%3B&ss=Iceland&is_ski_area=&checkin_year=2022&checkin_month=5&checkin_monthday=1&checkout_year=2022&checkout_month=5&checkout_monthday=7&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=3d76a7140d900298&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=97&dest_type=country&place_id_lat=64.72&place_id_lon=-18.4377&search_pageview_id=3d76a7140d900298&search_selected=true&ss_raw=ice"
    bookLink.target = '_blank'
}

else if(highScoreDestination=="Croatia")
{
    description.innerHTML = ["<br/><br/>- As a primer, Croatia's island-speckled coastline is indisputably its main attraction. When set against a dazzling white pebbly beach, the waters sparkle with an almost jewel-like intensity in shades of emerald and sapphire.<br/><br/>- But shift your gaze from the glittering waters and chances are an almighty mountain will loom into view. <br/><br/>- Croatia's limestone karst landscapes are a wonderland of craggy peaks, caverns, river canyons, waterfalls and ridiculously picturesque lakes."]
    imageCollage.innerHTML = "<img src=\"images/croatia.jpg\" width=\"500rem\" height=\"500rem\">"
    bookLink.href = "https://www.booking.com/searchresults.en-gb.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB&lang=en-gb&sid=067f718a8705b867685c5dd91de72b5b&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Faid%3D304142%3Blabel%3Dgen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB%3Bsid%3D067f718a8705b867685c5dd91de72b5b%3Bsb_price_type%3Dtotal%3Bsrpvid%3Ddbf4a71c937c006b%26%3B&ss=Croatia&is_ski_area=&checkin_year=2022&checkin_month=5&checkin_monthday=1&checkout_year=2022&checkout_month=5&checkout_monthday=7&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=54&dest_type=country&place_id_lat=44.7185&place_id_lon=16.145&search_pageview_id=34a1a77735d401a4&search_selected=true&ss_raw=croatia"
    bookLink.target = '_blank'
}

else if(highScoreDestination=="Bulgaria")
{
    description.innerHTML = ["<br/><br/>- Soul-stirring mountains rival golden beaches, while cities hum with nightlife and art. <br/><br/>- Within Bulgaria’s beguiling blend of nature and history, unforgettable adventures are guaranteed."]
    imageCollage.innerHTML = "<img src=\"images/bulgaria.jpg\" width=\"500rem\" height=\"500rem\">"
    bookLink.href = "https://www.booking.com/searchresults.en-gb.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB&lang=en-gb&sid=067f718a8705b867685c5dd91de72b5b&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Faid%3D304142%3Blabel%3Dgen173nr-1DCAEoggI46AdIM1gEaBeIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AsWqp5MGwAIB0gIkNTYyNWNlYjUtZjE0Yy00OGJiLTlkOWEtNDE0MzYzM2I5MjY02AIE4AIB%3Bsid%3D067f718a8705b867685c5dd91de72b5b%3Bsb_price_type%3Dtotal%3Bsrpvid%3D5b15a77dec1f0511%26%3B&ss=Sunny+Beach%2C+Burgas+Province%2C+Bulgaria&is_ski_area=&checkin_year=2022&checkin_month=5&checkin_monthday=1&checkout_year=2022&checkout_month=5&checkout_monthday=7&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=f974a7e987b200da&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=900039405&dest_type=city&place_id_lat=42.69505&place_id_lon=27.71018&search_pageview_id=f974a7e987b200da&search_selected=true&ss_raw=sunny+bea"
    bookLink.target = '_blank'
}
// Script Upgraded by Mark Anhtony Graham
// from cyberkodes.com
// feel free to use and modify for your use.



$(function()
{
	
	// automatically logout users who may login and never perform an event
	// automatically logout users who may login and never perform an event
	const si = setInterval(
		function(){
			window.location = "./logout.php";
		},
		600000 // ten minutes remaining
	);
	
    function timeChecker()
    {
        setInterval(function()
        {
            var storedTimeStamp = sessionStorage.getItem("lastTimeStamp");  
            timeCompare(storedTimeStamp);
			// clearing the setInterval for users who may never make an event
			clearInterval(si);
        },3000);
    }

	
    function timeCompare(timeString)
    {
        var maxMinutes  = 10;  //GREATER THEN 10 MIN.
        var currentTime = new Date();
        var pastTime    = new Date(timeString);
        var timeDiff    = currentTime - pastTime;
        var minPast     = Math.floor( (timeDiff/60000) ); 

        if( minPast > maxMinutes)
        {
            sessionStorage.removeItem("lastTimeStamp");
            window.location = "./logout.php";
            return false;
        }else
        {
            //JUST ADDED AS A VISUAL CONFIRMATION
            console.log(currentTime +" - "+ pastTime+" - "+minPast+" min past");
        }
    }
	

    if(typeof(Storage) !== "undefined") 
    {
        $(document).mousemove(function()
        {
            var timeStamp = new Date();
            sessionStorage.setItem("lastTimeStamp",timeStamp);
			timeChecker(); // very important to put the timeChecker() function in the event function
        });

        //timeChecker();
    }
});//END JQUERY



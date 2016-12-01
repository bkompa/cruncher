

$(document).ready(function(){
			var id;
			$("li").click(function(e) {
			  e.preventDefault();
			  $("li").removeClass("selected");
			  $(this).addClass("selected");
			  
			  var upload=`	<form action="upload.php" name ='fileform' method="get" id='fileform' enctype="multipart/form-data">
			
    		Select RBN to upload:
    		<input type="file" name="file" id="fileToUpload">
    		<input type="submit"  value="upload" id='filesubmit' name="submit">
    			
    		</form>
    		
    		<a target="_blank" href='http://rpbridge.net/7l87.htm'>What is RBN?</a> <a href='http://rpbridge.net/z/bfcsetup.exe'>LIN converter program (Windows only)</a>
    		
			`;
			
			  var analyze=`
			  	Select the group of pairs to analyze:
			  	<br>
			  	Opening leader: 
			  	<form action="query.php" method="get" enctype="multipart/form-data">
 				 <input type="radio" id = "lead" name="under" value="1" checked>Underlead
  				 <br>
  				 <input type="radio" id="lead" name="under" value="0">Lead
  				 <br>
			
			  	
			  	From card(s) (AKQJT9-2): <input type="text" id='cardlead' name="cardlead">
			    <br>
			 	
				 Optional <input type='checkbox' name ='thirdcardoption' value='1'>: Third hand had at least (AKQJT9-2): <input type="text" id='thirdcards' name="thirdcard" >
				<br>
			 
			 
				Optional <input type='checkbox' name ='thirdlengthoption' value='1'>: Third hand's length
				<input type="number" id='thirdhandlength' min="0" max="13">
			
				<br>
			Defenders' Bidding:
			
 				 <input type="radio" id = "bid" name="defenderbid" value="0" checked>All bidding
  				 <br>
  				 <input type="radio" id="bid" name="defenderbid" value="1">Defenders Bid
  				 <br>
  				 <input type="radio" id="bid" name="defenderbid" value="2">Defenders Silent
  				 <br>
			
			<br>
			Suit contracts or NT:
			
 				 <input type="radio" id = "suit" name="suit" value="0" checked>All contracts
  				 <br>
  				 <input type="radio" id="suit" name="suit" value="1">Suit Contracts
  				 <br>
  				 <input type="radio" id="suit" name="suit" value="2">No Trump Contracts
  				 <br>
			
			<br>
			Exclude trump leads at suit contracts:
			
 				 <input type="radio" id = "trump" name="trump" value="1" checked>Yes
  				 <br>
  				 <input type="radio" id="trump" name="trump" value="0">No
  				 <br>
  			<input type="submit"  value="Crunch" id='filesubmit' name="Crunch">	 
			</form>
			<br>
			
			
			
			  `;
			  var history='<p>History</p>'
			  var inspect='<p>Inspect</p>'
			  var setgroups=`
			  <p>Set Group of Pairs</p>
			  
			 
			  <form id='pairform'>
				Number of pairs in group
				<input type="number" id='numpairs' min="1" max="1000" value="1">
			</form> <button type='button' id='pairbutton' onclick=addPair()>Generate</button>
			<p>Format: LastName1+LastName2</p>
			  <div id='pairdiv'></div>`;
			  
			  var id=$(this).attr("id");
			  
			
			  if(id=='upload'){
			  	$('#tab-pane').html(upload);
			  }
			  if(id=='analyze'){
			 $('#tab-pane').html(analyze);
			  }
			  if(id=='history'){
			  	//NOT WORKING id = <?php echo $id; ?>;
			  	//AJAX for query history 
			  	var data=$.ajax('history.php/user/'+id,
	       		{type: 'GET'});
	       		
	       		//parse the data and put into #tab-pane
			  $('#tab-pane').html(history);
			  	
			  }
			  if(id=='inspect'){
			  //NOT WORKING	id = <?php echo $id; ?>;
			  	
			  	//AJAX for the inspect
			  	var data=$.ajax('inspect.php/user/'+id,
	       		{type: 'GET'});
	       		
	       		//parse the data and put into #tab-pane
				
	       		
			  

			  $('#tab-pane').html(inspect);
			  }
			  if(id=='setgroups'){
			  $('#tab-pane').html(setgroups);
			  }
			  
			  
			});
			
			
			
			
			
			
		});
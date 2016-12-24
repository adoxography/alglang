{{ Form::button('Validate', ['id' => 'morpheme-validate-button']) }}

<div id = 'create-morpheme-dialog'>
	<ul></ul>
</div>

<div id = 'alert-dialog'>
	<p></p>
</div>

<script>
	$(document).ready(function(){
		var alertDialog, morphemeDialog, morphemeEntry, language, morphemes,
		morphemeList = $('#create-morpheme-dialog').children('ul'),
		alertMessage = $('#alert-dialog').children('p');
		numMorphemes = 0;

		morphemeEntry = function(morpheme){
			var entry = $('<li>').append(
				$('<label>').text('Morpheme'),             // the name label
				$('<input>').attr('type', 'text')          // the name itself - disabled
							.attr('name', 'morpheme-name')
							.attr('value', morpheme)
							.attr('disabled', 'disabled'),
				$('<label>').text('Gloss'),                // the gloss label
				$('<input>').attr('type', 'text')          // the gloss name
							.attr('class', 'gloss-input'),
				$('<input>').attr('type', 'hidden')        // the gloss ID
							.attr('name', 'morpheme-gloss')
							.attr('class', 'gloss-hidden'),
				$('<label>').text('Slot'),                 // the slot label
				$('<input>').attr('type', 'text')          // the slot name
							.attr('class', 'slot-input'),
				$('<input>').attr('type', 'hidden')        // the slot ID
							.attr('name', 'morpheme-slot')
							.attr('class', 'slot-hidden')
			);

			numMorphemes++;

			return entry;
		};

		function packageData(name){
			return $('input[name='+name+']').map(function(){
				return $(this).val();
			}).get();
		}

		function customAlert(message){
			alertMessage.html(message);
			alertDialog.dialog('open');
		}

		function addMorphemes(){
			var names = packageData('morpheme-name');
			var glosses = packageData('morpheme-gloss');
			var slots = packageData('morpheme-slot');

			if(validIDs(glosses) && validIDs(slots)){
				$.ajax({
					method: 'GET',
					url: '/morphemes/createOTG',
					datatype: 'html',
					data: {
						'_token': $('input[name=_token]').val(), //Include CSRF Token
						'names': names,
						'glosses': glosses,
						'slots': slots,
						'numMorphemes': numMorphemes,
						'language': language
					}
				})
				.done(function(data){
					alertDialog.html("Morphemes added successfully.");
					alertDialog.dialog('open');
				})
				.fail(function(jqXHR, textStatus, errorThrown){
					customAlert("An error occurred. Please try again.");
				});

				morphemeDialog.dialog('close');
			}
			else{
				customAlert("Please fill in all the information");
				return false;
			}

			return true;
		}

		function validIDs(array){
			var result = true;

			for(var i = 0; i < array.length && result; i++){
				result = array[i].length > 0 && !isNaN(array[i]);
			}

			return result;
		}

		function hasV(){
			var morphemeSplit = morphemes.split("-");
			var found = false;

			for(i = 0; i < morphemeSplit.length && !found; i++){
				found = morphemeSplit[i].toLowerCase() === "v";
			}

			return found;
		}

		function validateMorphemesFromServer(){
			$.ajax({
				url: '/morphemes/exists',
				data: {
					language: language,
					morphemes: morphemes
				},
				type: 'GET',
				dataType: 'json'
			})
			.done(function(data){
				morphemeList.empty();
				numMorphemes = 0;
				if(data.length > 0){
					$.each(data, function(i, morpheme){
						morphemeList.append(morphemeEntry(morpheme));
					});
					morphemeList.find('input.gloss-input').autocomplete({
						source: {!! $glosses->toJson() !!},
					    select: function(event, ui) {
					    	$(this).next().val(ui.item.id);
					    }
					});
					morphemeList.find('input.slot-input').autocomplete({
						source: {!! $slots->toJson() !!},
					    select: function(event, ui) {
					    	$(this).next().val(ui.item.id);
					    }
					});

					morphemeDialog.dialog('open');
				}
				else{
					customAlert('All morphemes exist.');
				}
			});
		}

		$('#morpheme-validate-button').click(function(e){
			language = $('#language_id').val();
			morphemes = $('#morphemicForm').val();

			if(morphemes.length > 0){
				if(hasV()){
					validateMorphemesFromServer();
				}
				else{
					customAlert("Please include a position from the Vstem.");
				}
			}
			else{
				customAlert('Please enter a morphemic form before validating.');
			}
		});

		morphemeDialog = $('#create-morpheme-dialog').dialog({
			autoOpen: false,
			modal: true,
			buttons: {
				'Add Morphemes': addMorphemes
			},
			maxHeight: 600
		});

		alertDialog = $('#alert-dialog').dialog({
			autoOpen: false,
			modal: true
		});

	});
</script>
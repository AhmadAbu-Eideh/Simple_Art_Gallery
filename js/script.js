$(document).ready(function(){
    const artworks = [];

    function displayWorks(){
        const gallery=$("#gallery");
        gallery.empty();

        artworks.forEach(artwork=>{
            const card=$("<div>").addClass("artwork-card");
            const img=$("<img>").attr("src", artwork.imageUrl).attr("alt", artwork.title);
            const title=$("<h3>").text(artwork.title);
            const artist = $("<p>").text(`Artist: ${artwork.artist}`);
            const description=$("<p>").text(artwork.description);

            card.append(img,title,artist,description);
            gallery.append(card);
        });
    }

    function submitWorks()
    {
        const title=$("#title").val();
        const artist=$("#artist").val();
        const description=$("#description").val();
        const imageUrl=$("#imageUrl").val();

        if(!title || !artist || !description || !imageUrl)
        {
            alert("The form must not be empty, fill all fields.");
            return;
        }

        const artwork={
            title,
            artist,
            description,
            imageUrl
        };
        
        artworks.push(artwork);

        $("#submission-form")[0].reset();

        displayWorks();
    }


    function clearForm(){
        const form=$("#submission-form")[0];
        if(form.title.value || form.artist.value || form.description.value || form.imageUrl.value)
        {
            alert("The form has been cleared.");
        }
        form.reset();
    }

    $("#submit-button").on("click",submitWorks);
    $("#clear-button").on("click",clearForm);
    displayWorks();

    
});
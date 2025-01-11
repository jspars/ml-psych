<script>
export let pubTitle = "null";
export let pubJournal = "null";
export let pubJournalDetails = "null";
export let pubDate = "null";
export let pubDescription= "null";
export let pubLink = "";
</script>

<div class="pub">
    <h2 class="pub-title">{pubTitle}</h2>
    <div class="pub-details">
        <strong class="pub-journal">{pubJournal}</strong>
        <p class="pub-date">{pubJournalDetails} ({pubDate})</p>
        <p class="pub-description">{pubDescription}</p>
        <a class="pub-link" href={pubLink}>{pubLink}</a>

    </div>
</div>


<style lang="scss">
    p {
        color: #444;
    }

    .pub {
        margin: 3em 1em;
        // max-width: 75%;
        
        h2 {
            font-family: 'Nanum Myeongjo', serif;
            font-weight: 600;
        }
    }

    .pub-title {
        color: #333;
        font-size: 1.5rem;
    }

    .pub-details {
        margin-top: 1em;
    }

    .pub-journal {
        color: #444;
        padding-left: 1em;
        padding-top: 0;
        margin-top: 0;
    }

    .pub-date {
        color: #666;
        font-size: smaller;
        font-weight: 300;
        font-style: italic;
        padding: 0;
        margin: 0;
        padding-left: 1.25em;
        
    }

    .pub-description {
        padding-left: 0.25em;
    }

    
</style>
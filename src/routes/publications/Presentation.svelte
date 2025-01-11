<script>
    export let presTitle = "null";
    export let presEvent = "null";
    export let presEventDetails = "null";
    export let presDate = "null";
    export let presDescription= "null";
    export let presLink = "";
    </script>
    
    <div class="pres">
        <h2 class="pres-title">{presEvent}</h2>
        <div class="pres-details">
            <p class="pres-event">{presTitle}</p>
            <p class="pres-date">{presEventDetails} ({presDate})</p>
            <p class="pres-description">{presDescription}</p>
            <a class="pres-link" href={presLink}>{presLink}</a>
    
        </div>
    </div>
    
    
    <style lang="scss">
        p {
            color: #444;
            margin: 0;

        }

        .pres {
            margin: 3em 1em;
            // max-width: 75%;
            
            h2 {
                font-family: 'Roboto', serif;
                font-size: 1.25em;
                font-weight: 300;
                color: #333;
            }
        }
    
        .pres-title {
            color: #333;
        }
    
        .pres-details {
            margin-top: 1em;
        }
    
        .pres-event {
            color: #444;
            padding-left: 1em;
            padding-top: 0;
            margin-top: 0;
            font-family: 'Nanum Myeongjo', serif;
            font-weight: 600;
        }
    
        .pres-date {
            color: #666;
            font-size: smaller;
            font-weight: 300;
            font-style: italic;
            padding: 0;
            margin: 0;
            padding-left: 1.25em;
            
        }
    
        .pres-description {
            padding-top: 0.75em;
            padding-left: 0.25em;
        }
    
        
    </style>
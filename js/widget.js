/**
 * Callback function for use with the JSON API of commandlinefu.com
 *
 * To use this widget, ensure that there is a div on your page with id "commandlinefu_list".
 * This is where the command list HTML will be injected.
 * 
 * Don't like this function?  No problem - you can use your own callback easily by
 * making a request to
 *   http://www.commandlinefu.com/<page-of-results>/json/<your-callback-here>
 * For example:
 *   http://www.commandlinefu.com/commands/by/root/json/loadintopage
 * will call the function "loadintopage" passing in the top 5 commands from that page
 * as a JSON-encoded array. 
 *
 * For more details, see http://www.commandlinefu.com/site/widget/
 * 
 * @author David Winterbottom <root@commandlinefu.com>
 */
function clfwidget(commands) 
{
    var commandsHtml = [];
    for (var i=0; i<Math.min(5, commands.length); ++i) {
        var command = commands[i].command;
        var summary = commands[i].summary;
        var url = commands[i].url;
        commandsHtml.push('<li><a href="'+url+'">'+summary+'</a><br/><code>$ '+command+'</code></li>');
    }
    var listHtml = '<ul>'+commandsHtml.join('')+'</ul>';
    var widgetHtml = listHtml+'<a href="http://www.commandlinefu.com"><img src="http://www.commandlinefu.com/images/uservoice-logo.jpg" /></a>';
    document.getElementById('commandlinefu_list').innerHTML = widgetHtml;
}
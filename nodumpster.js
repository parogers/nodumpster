/*
 * NoDumpster - Replace youtube live chat with a pic of a dumpster fire
 * Copyright (C) 2017  Peter Rogers (peter.rogers@gmail.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function() {
    function hideChat()
    {
	var chat = document.getElementById("chat");
	// TODO - custom attributes are icky
	if (chat && !chat.fixedDumpsterFire) 
	{
	    console.log("[NoDumpster] Live chat? Let me fix that for you!");
	    var url = browser.extension.getURL("imgs/dumpsterfire.jpg");
	    var img = document.createElement("img");
	    img.src = url;
	    img.style.border = "1px solid black";

	    chat.innerHTML = "";
	    chat.appendChild(img);
	    chat.fixedDumpsterFire = true;
	}
    }

    function checkAndHideChat()
    {
	hideChat();
	/* Attempt to hide the chat every second. This gets around two 
	 * problems - First the chat widget shows up after the document is 
	 * finished loading plus a random amount of time. Second navigating
	 * around youtube.com doesn't (usually) trigger page loads. (single
	 * page navigation magic) */
	setTimeout(checkAndHideChat, 1000);
    }

    checkAndHideChat();
})();

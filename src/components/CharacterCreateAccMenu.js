import React from "react";

function CharacterCreateAccMenu() {
    return (
        <div>
            <ul class="vertical menu accordion-menu" data-accordion-menu>
                <li>
                    <a href="#">Item 1</a>
                    <ul class="menu vertical nested">
                        <li><a href="#">Item 1A</a></li>
                        <li><a href="#">Item 1B</a></li>
                    </ul>
                </li>
                <li><a href="#">Item 2</a></li>
            </ul>
        </div>
    )
}
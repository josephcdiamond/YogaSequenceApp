const items = document.querySelectorAll(".item");
const sortableLists = document.querySelectorAll(".sortable-list");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
       setTimeout(() => item.classList.add("dragging"), 0);
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });
});

sortableLists.forEach(sortableList => {
    const initSortableList = (e) => {
        const draggingItem = document.querySelector(".dragging");
        const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;

        });

        if (nextSibling == null) {
            sortableList.appendChild(draggingItem);
        } else {
            sortableList.insertBefore(draggingItem, nextSibling)
        };
    }

    sortableList.addEventListener("dragover", initSortableList);
});


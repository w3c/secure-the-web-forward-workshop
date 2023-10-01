(function () {
    // Note the need to initialize this right away for some reason
    // (this cannot wait until the "load" event in particular)
    const player = window.Stream ? window.Stream(document.getElementById('videoplayer')) : null;

    var createEl = function (tagName, attrs) {
        var anchor = document.createElement(tagName);
        Object.keys(attrs).forEach(function (key) {
            anchor[key] = attrs[key];
        });
        return anchor;
    };

    var createAnchorFromHeading = function (headingEl) {
        return createEl(
            "a",
            {
                className: "ref",
                href: "#" + headingEl.id,
                textContent: "#",
                title: headingEl.textContent
            }
        );
    };

    window.addEventListener("load", function () {
        Array.prototype.forEach.call(document.querySelectorAll("#main h1[id], #main h2[id], #main h3[id], #main h4[id], #main h5[id]"), function (el) {
            var a = createAnchorFromHeading(el);
            el.classList.add("has-ref");
            el.addEventListener("click", function () {
                a.click();
            });
            el.insertBefore(a, el.firstChild);
        });

        const toggle = document.querySelector('[data-action=toggle]');
        const toggling = {};
        if (toggle) {
            const button = document.createElement('button');
            button.innerHTML = 'Expand position statements ▶';
            button.setAttribute('data-action', 'expand');
            toggle.appendChild(button);

            button.addEventListener('click', _ => {
                if (button.getAttribute('data-action') === 'expand') {
                    button.setAttribute('data-action', 'collapse');
                    button.innerHTML = 'Collapse position statements ▼';
                    [...document.querySelectorAll('details.paper')].forEach(paper => {
                        toggling[paper.id] = true;
                        if (!paper.hasAttribute('open')) {
                            paper.setAttribute('open', '');
                        }
                    });
                }
                else {
                    button.setAttribute('data-action', 'expand');
                    button.innerHTML = 'Expand position statements ▶';
                    [...document.querySelectorAll('details.paper')].forEach(paper => {
                        toggling[paper.id] = true;
                        if (paper.hasAttribute('open')) {
                            paper.removeAttribute('open');
                        }
                    });
                }
            });
        }

        for (const paper of [...document.querySelectorAll('details.paper')]) {
            paper.addEventListener('toggle', _ => {
              if (paper.open && !toggling[paper.id]) {
                window.location.hash = '#' + paper.id;
              }
              toggling[paper.id] = false;
            });
        }

        const hash = window.location.hash;
        if (hash) {
            const hashDetails = document.querySelector(`details${hash}`);
            if (hashDetails) {
                if (!hashDetails.hasAttribute('open')) {
                    hashDetails.setAttribute('open', '');
                }
            }
            else {
                const pos = hash.lastIndexOf('-');
                const prefix = pos > 0 ? hash.substring(0, pos) : hash;
                const el = document.querySelector(`details${prefix}`);
                if (el) {
                    if (!el.hasAttribute('open')) {
                        toggling[el.id] = true;
                        el.setAttribute('open', '');
                    }
                    if (el && hash !== prefix) {
                        const hashEl = document.querySelector(hash);
                        if (hashEl) {
                            hashEl.scrollIntoView();
                        }
                    }
                }
            }
        }

        if (window.Stream) {
            const playParagraphs = [...document.querySelectorAll('p[data-start]')];
            for (const p of playParagraphs) {
                const button = document.createElement('button');
                button.innerText = '▶️';
                button.setAttribute('title', 'Play talk at this position');
                p.insertBefore(button, p.firstChild);
                button.addEventListener('click', evt => {
                    if (player.paused) {
                        player.play();
                    }
                    player.currentTime = parseFloat(p.getAttribute('data-start'));
                    return true;
                });
            }
        }
    });
})();

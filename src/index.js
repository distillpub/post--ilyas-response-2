import VisualTOC from './diagrams/robust.svelte';

// eagerly initialize vtoc  as it's above the fold
const tocNav = document.getElementById('robust');
const visualTOC = new VisualTOC({target: tocNav});

// lazily initialize any diagram below the fold. E.G:
// {
//   const figure = document.getElementById('StyleTransferExamples');
//   figure.addEventListener("ready", function() {
//     const styleTransferExamples = new StyleTransferExamples({target: figure});
//   });
// }

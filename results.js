const schoolFilter = document.querySelector('#school-filter');
const valueFilter = document.querySelector('#value-filter');
const stories = [...document.querySelectorAll('.story-card[data-school]')];
function filterStories() {
  for (const story of stories) {
    story.hidden = !!((schoolFilter.value && story.dataset.school !== schoolFilter.value) ||
      (valueFilter.value && !story.dataset.values.split(' ').includes(valueFilter.value)));
  }
  document.querySelector('#results-empty').hidden = stories.some(story => !story.hidden);
}
schoolFilter.addEventListener('change', filterStories);
valueFilter.addEventListener('change', filterStories);
filterStories();

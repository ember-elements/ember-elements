// @ts-nocheck
import Component from '@glimmer/component';
import { action, set } from '@ember/object';
// @ts-ignore
import { tracked } from '@glimmer/tracking';
export interface IFilm {
  /** Title of film. */
  title: string;
  /** Release year. */
  year: number;
  /** IMDb ranking. */
  rank: number;
}
interface TestArgs {}

export default class Test extends Component<TestArgs> {
  popperTargetValue!: HTMLElement;
  propsObject = {
    active: true,
    large: true,
    fill: false,
    intent: 'primary',
    icon: 'calendar',
    rightIcon: 'add',
  };
  text = 'button';
  className = 'hii';
  propsValue = {
    className: 'hgh',
    intent: 'primary',
    icon: 'tick',
  };
  size = 100;
  calloutText = `The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered `;
  elevationText = 'elevationText';
  elevation = 4;
  value = 0.4;
  options = [
    { value: 'a' },
    { value: 'b', className: 'foo' },
    { value: 'c', disabled: true },
    { label: 'Dog' },
  ];
  switchLabel = 'Privacy setting';
  textIG = 'hi';
  value1 = 'asdfsdafasdfsdfsdfsdfsdfsdafasdfdsafasdfdsfadsfadsfdsfdsfdsfdsfsdfsdfdsfsdfsdfsd';
  tagText = 'hii';
  values = ['hii', 'hii2'];
  @action
  onClick() {
    set(this.propsObject, 'active', !this.propsObject.active);
    set(this.propsObject, 'intent', 'success');
    set(this, 'className', '123');
    set(this.propsValue, 'icon', 'add');
    set(this, 'elevation', 2);
    set(this, 'size', 200);
    set(this, 'value', 0.8);
    set(this, 'textIG', 'hii1212');
    set(this, 'valueNI', 'eee');
  }
  @action
  onKeyDown() {
    // console.log('onKeyDown');
  }
  @action
  onKeyUp() {
    // console.log('onKeyUp');
  }
  @action
  handleEnabledChange() {
    // console.log('hii');
  }

  @action
  handleChange(values: Array<string>) {
    // console.log(values);
    set(this, 'values', values);
  }

  //numeric input
  disabled = true;
  fill = false;
  large = false;
  leftIcon = '';
  allowNumericCharactersOnly = true;
  selectAllOnFocus = false;
  selectAllOnIncrement = false;
  min = 0;
  intent = 'none';
  max = 100;
  valueNI = '';
  buttonPosition = 'right';

  isOpen = false;
  keepChildrenMounted = false;
  collapseText = `[11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms
    <br />
    [11:53:30] Starting 'typescript-typings-blueprint'...
    <br />
    [11:53:30] Finished 'typescript-typings-blueprint' after 198 ms
    <br />
    [11:53:30] write ./blueprint.css
    <br />
    [11:53:30] Finished 'sass-compile-blueprint' after 2.84 s`;
  show = 'Show';
  hide = 'Hide';
  build = 'build logs';
  @action
  onClickButton() {
    //mouse event action
    set(this, 'isOpen', !this.isOpen);
  }

  @action
  doFuction() {
    set(this, 'keepChildrenMounted', !this.keepChildrenMounted);
  }

  isOpenOverlay = false;
  hasBackdrop = true;
  autoFocus = true;
  enforceFocus = true;
  canEscapeKeyClose = true;
  usePortal = true;
  canOutsideClickClose = true;
  useTallContent = false;
  isOpenPopper = false;
  @action
  onOverlayToggle() {
    set(this, 'isOpenOverlay', !this.isOpenOverlay);
  }
  @action
  onOverlayToggle1() {
    set(this, 'isOpenPopper', !this.isOpenPopper);
  }

  @action
  onClose() {
    set(this, 'isOpenOverlay', false);
    set(this, 'isOpenPopper', false);
    set(this, 'isOpenDialog', !this.isOpenDialog);
  }

  @action
  handleClose() {
    set(this, 'isOpenOverlay', false);
    set(this, 'useTallContent', false);
  }
  @action
  focusButton() {
    (document.querySelector('.focus-button') as HTMLElement).focus();
  }
  @action
  toggleScrollButton() {
    set(this, 'useTallContent', !this.useTallContent);
  }
  @action
  onPropsChangeEvent(type: string) {
    if (type == 'autoFoucs') {
      set(this, 'autoFocus', !this.autoFocus);
    } else if (type == 'enforceFocus') {
      set(this, 'enforceFocus', !this.enforceFocus);
    } else if (type == 'usePortal') {
      set(this, 'usePortal', !this.usePortal);
    } else if (type == 'canOutsideClickClose') {
      set(this, 'canOutsideClickClose', !this.canOutsideClickClose);
    } else if (type == 'canEscapeKeyClose') {
      set(this, 'canEscapeKeyClose', !this.canEscapeKeyClose);
    } else if (type == 'hasBackdrop') {
      set(this, 'hasBackdrop', !this.hasBackdrop);
    }
  }

  isOpenDialog = false;
  @action
  onDialogToggle() {
    set(this, 'isOpenDialog', !this.isOpenDialog);
  }

  @action
  didInsertPopper(element: HTMLElement) {
    this.popperTargetValue = element;
  }

  //select
  TOP_100_FILMS1 = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ].map((m, index) => ({ ...m, rank: index + 1 }));

  TOP_100_FILMS = this.TOP_100_FILMS1;
  isOpenSelect = false;
  selectTargetValue!: HTMLElement;

  @action
  onSelectToggle() {
    set(this, 'isOpenSelect', !this.isOpenSelect);
  }

  @action
  selectPath(element: HTMLElement) {
    this.selectTargetValue = element;
  }
  filterFilm = (query, film, _index, exactMatch) => {
    const normalizedTitle = film.title.toLowerCase();
    const normalizedQuery = query.toLowerCase();

    if (exactMatch) {
      return normalizedTitle === normalizedQuery;
    } else {
      return `${film.rank}. ${normalizedTitle} ${film.year}`.indexOf(normalizedQuery) >= 0;
    }
  };

  createFilm = (title: string) => {
    return {
      rank: 100 + Math.floor(Math.random() * 100 + 1),
      title,
      year: new Date().getFullYear(),
    };
  };

  @action
  onCloseSelect() {
    set(this, 'isOpenSelect', false);
  }

  createdItems = [];
  film = this.TOP_100_FILMS[0];
  maybeCreateNewItemFromQuery = (title: string) => {
    return {
      rank: 100 + Math.floor(Math.random() * 100 + 1),
      title,
      year: new Date().getFullYear(),
    };
  };
  isItemDisabled1 = (film: IFilm) => {
    return film.year < 2000;
  };

  @action
  handleValueChange(film: IFilm) {
    const { createdItems, items } = maybeDeleteCreatedFilmFromArrays(
      this.TOP_100_FILMS,
      this.createdItems,
      this.film
    );
    // Add the new film to the list if it is newly created.
    const { createdItems: nextCreatedItems, items: nextItems } = maybeAddCreatedFilmToArrays(
      items,
      createdItems,
      film
    );
    set(this, 'createdItems', nextCreatedItems);
    set(this, 'film', film);
    set(this, 'TOP_100_FILMS', nextItems);
    set(this, 'isOpenSelect', false);
  }

  noResults = `<li class=""><a tabindex="-1" class="ee-menu-item ee-disabled"><div class="ee-text-overflow-ellipsis ee-fill">No results.</div></a></li>`;
  initialContent = `<li class=""><a tabindex="-1" class="ee-menu-item ee-disabled"><div class="ee-text-overflow-ellipsis ee-fill">${this.TOP_100_FILMS1.length} items loaded.</div></a></li>`;

  // multi-select -------------------------
  popoverProps = {
    minimal: true,
  };
  items = this.TOP_100_FILMS1;
  createdItemsMulti = [];
  films = [];
  areFilmsEqual = (filmA: IFilm, filmB: IFilm) => {
    // Compare only the titles (ignoring case) just for simplicity.
    return filmA.title.toLowerCase() === filmB.title.toLowerCase();
  };

  @action
  handleFilmSelect(film: IFilm) {
    if (!this.isFilmSelected(film)) {
      this.selectFilm(film);
    } else {
      this.deselectFilm(this.getSelectedFilmIndex(film));
    }
  }

  private getSelectedFilmIndex(film: IFilm) {
    return this.films.indexOf(film);
  }

  private isFilmSelected(film: IFilm) {
    return this.getSelectedFilmIndex(film) !== -1;
  }
  private deselectFilm(index: number) {
    const film = this.films[index];
    const { createdItems: nextCreatedItems, items: nextItems } = maybeDeleteCreatedFilmFromArrays(
      this.items,
      this.createdItemsMulti,
      film
    );

    // Delete the item if the user manually created it.
    set(this, 'createdItemsMulti', nextCreatedItems);
    set(
      this,
      'films',
      this.films.filter((_film, i) => i !== index)
    );
    set(this, 'items', nextItems);
  }

  private selectFilm(film: IFilm) {
    this.selectFilms([film]);
  }

  private selectFilms(filmsToSelect: IFilm[]) {
    let nextCreatedItems = this.createdItemsMulti.slice();
    let nextFilms = this.films.slice();
    let nextItems = this.items.slice();

    filmsToSelect.forEach(film => {
      const results = maybeAddCreatedFilmToArrays(nextItems, nextCreatedItems, film);
      nextItems = results.items;
      nextCreatedItems = results.createdItems;
      // Avoid re-creating an item that is already selected (the "Create
      // Item" option will be shown even if it matches an already selected
      // item).
      nextFilms = !arrayContainsFilm(nextFilms, film) ? [...nextFilms, film] : nextFilms;
    });

    set(this, 'createdItemsMulti', nextCreatedItems);
    set(this, 'films', nextFilms);
    set(this, 'items', nextItems);
  }

  renderTag = (film: IFilm) => film.title;
  @action
  handleTagRemove(_tag: string, index: number) {
    this.deselectFilm(index);
  }

  @action
  handleClearTagInput() {
    set(this, 'films', []);
  }

  //tooltip related things goes here
  @tracked tooltipRefVar!: HTMLElement = null;
  isOpenTooltip = false;
  tooltip1 = false;
  tooltip2 = false;
  @action
  tooltipRef(element: HTMLElement) {
    this.tooltipRefVar = element;
  }

  @action
  openTooltip(type: number) {
    if (type == 1) set(this, 'tooltip1', true);
    else set(this, 'tooltip2', true);

    set(this, 'isOpenTooltip', true);
  }

  @action
  closeTooltip(type: number) {
    if (type == 1) set(this, 'tooltip1', false);
    else set(this, 'tooltip2', false);
    set(this, 'isOpenTooltip', false);
  }

  // Drawer goes here

  isOpenDrawer = false;
  @action
  handleOpenDrawer() {
    set(this, 'isOpenDrawer', true);
  }
  @action
  handleCloseDrawer() {
    set(this, 'isOpenDrawer', false);
  }
}

export function maybeAddCreatedFilmToArrays(
  items: IFilm[],
  createdItems: IFilm[],
  film: IFilm
): { createdItems: IFilm[]; items: IFilm[] } {
  const isNewlyCreatedItem = !arrayContainsFilm(items, film);
  return {
    createdItems: isNewlyCreatedItem ? addFilmToArray(createdItems, film) : createdItems,
    // Add a created film to `items` so that the film can be deselected.
    items: isNewlyCreatedItem ? addFilmToArray(items, film) : items,
  };
}

export function maybeDeleteCreatedFilmFromArrays(
  items: IFilm[],
  createdItems: IFilm[],
  film: IFilm
): { createdItems: IFilm[]; items: IFilm[] } {
  const wasItemCreatedByUser = arrayContainsFilm(createdItems, film);

  // Delete the item if the user manually created it.
  return {
    createdItems: wasItemCreatedByUser ? deleteFilmFromArray(createdItems, film) : createdItems,
    items: wasItemCreatedByUser ? deleteFilmFromArray(items, film) : items,
  };
}

export function arrayContainsFilm(films: IFilm[], filmToFind: IFilm): boolean {
  return films.some((film: IFilm) => film.title === filmToFind.title);
}

export function addFilmToArray(films: IFilm[], filmToAdd: IFilm) {
  return [...films, filmToAdd];
}

export function deleteFilmFromArray(films: IFilm[], filmToDelete: IFilm) {
  return films.filter(film => film !== filmToDelete);
}

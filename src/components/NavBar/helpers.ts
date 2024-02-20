import { LinkType } from './types';

export const getLinkLists = (links: LinkType[]) => {
  const leftLinks = [];
  const rightLinks = [];
  const dropdownLinks = [];

  for (const link of links) {
    console.log('link:', link);
    if (link.side === 'left') {
      leftLinks.push(link);
    } else if (link.side === 'right') {
      rightLinks.push(link);
    } else if (link.side === 'dropdown') {
      dropdownLinks.push(link);
    }
  }

  return {
    leftLinks: leftLinks,
    rightLinks: rightLinks,
    dropdownLinks: dropdownLinks,
  }
}

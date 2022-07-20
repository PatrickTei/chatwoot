import conversations from './sidebarItems/conversations';
import contacts from './sidebarItems/contacts';
import settings from './sidebarItems/settings';
import notifications from './sidebarItems/notifications';
import primaryMenu from './sidebarItems/primaryMenu';

export const getSidebarItems = accountId => ({
  primaryMenu: primaryMenu(accountId),
  secondaryMenu: [
    conversations(accountId),
    contacts(accountId),
    settings(accountId),
    notifications(accountId),
  ],
});

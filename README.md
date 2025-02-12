# Lemon Email API Node.js Client

A comprehensive Node.js client for interacting with the Lemn email marketing API, providing easy access to email list management, broadcasts, transactional emails, and more.

## Installation

Install the package using npm:

```bash
npm install lemn-api
```

## Quick Start

```javascript
const LemnAPI = require('lemn-api');

// Initialize the client with your API key
const lemn = new LemnAPI('your_api_key');

// Example: Working with Lists
async function exampleListOperations() {
  try {
    // Create a new list
    const newList = await lemn.lists.create('Marketing Contacts');
    console.log('New list created:', newList);

    // Add a single contact to a list
    const contact = {
      email: 'john.doe@example.com',
      first_name: 'John',
      last_name: 'Doe'
    };
    const addedContact = await lemn.lists.addSingleContact(newList.id, contact);
    console.log('Added contact:', addedContact);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## API Reference

### Initialization

```javascript
const LemnAPI = require('lemn-api');
const lemn = new LemnAPI(apiKey, options);
```

#### Parameters
- `apiKey` (required): Your Lemn API key
- `options` (optional):
  - `baseUrl`: Custom base URL (defaults to Lemn's API endpoint)

### Available Methods

#### Lists
- `lemn.lists.create(name)`: Create a new contact list
- `lemn.lists.getAll()`: Retrieve all lists
- `lemn.lists.get(id)`: Get a specific list by ID
- `lemn.lists.update(id, updatedData)`: Update a list
- `lemn.lists.delete(id)`: Delete a list
- `lemn.lists.export(id)`: Export a list
- `lemn.lists.addData(id, csvData)`: Add data to a list via CSV
- `lemn.lists.addSingleContact(listId, contact)`: Add a single contact to a list
- `lemn.lists.getDomainStats(listId)`: Get domain statistics for a list
- `lemn.lists.deleteDomains(listId, domains)`: Delete specific domains from a list
- `lemn.lists.deleteContacts(listId, emails)`: Delete contacts from a list
- `lemn.lists.addUnsubscribes(listId, emails)`: Add emails to unsubscribe list
- `lemn.lists.getContactData(email)`: Retrieve contact data
- `lemn.lists.deleteContactData(email)`: Delete contact data
- `lemn.lists.getAllTags()`: Get all tags

#### Broadcasts
- `lemn.broadcasts.getUserRoutes()`: Get available postal routes
- `lemn.broadcasts.uploadFile(file)`: Upload a file
- `lemn.broadcasts.create(broadcastData)`: Create a new broadcast
- `lemn.broadcasts.getAll(options)`: Get all broadcasts with optional filters
- `lemn.broadcasts.get(id)`: Get a specific broadcast
- `lemn.broadcasts.updateDraft(id, updateData)`: Update a draft broadcast
- `lemn.broadcasts.delete(id)`: Delete a broadcast
- `lemn.broadcasts.start(id)`: Start sending a broadcast
- `lemn.broadcasts.sendTest(id, testData)`: Send a test email
- `lemn.broadcasts.cancel(id)`: Cancel a broadcast
- `lemn.broadcasts.duplicate(id)`: Duplicate a broadcast
- `lemn.broadcasts.updateSent(id, updateData)`: Update a sent broadcast
- `lemn.broadcasts.export(id)`: Export broadcast data
- `lemn.broadcasts.getDomainStats(id)`: Get domain statistics for a broadcast
- `lemn.broadcasts.getClientStats(id)`: Get client statistics
- `lemn.broadcasts.getBounceMessages(id, domain, type)`: Get bounce messages

#### Suppression Lists
- `lemn.supplists.create(listName)`: Create a new suppression list
- `lemn.supplists.getAll()`: Get all suppression lists
- `lemn.supplists.get(listId)`: Get a specific suppression list
- `lemn.supplists.update(listId, newName)`: Update a suppression list
- `lemn.supplists.delete(listId)`: Delete a suppression list
- `lemn.supplists.addData(listId, data)`: Add data to a suppression list

#### Exclusion Lists
- `lemn.exclusion.getAll()`: Retrieve all exclusion lists
- `lemn.exclusion.addToList(id, data)`: Add data to an exclusion list

#### Exports
- `lemn.exports.getAll()`: Retrieve all exported files

#### Transactional Emails
- `lemn.transactional.send(messageData)`: Send a transactional message

#### Webhooks
- `lemn.webhooks.createWebhook(data)`: Create a new webhook
- `lemn.webhooks.getAllWebhooks()`: Retrieve all webhooks
- `lemn.webhooks.updateWebhook(id, data)`: Update a webhook
- `lemn.webhooks.deleteWebhook(id)`: Delete a webhook

## Sending a Transactional Email Example

```javascript
const messageData = {
  fromname: 'Your Company',
  fromemail: 'noreply@yourcompany.com',
  to: 'recipient@example.com',
  toname: 'John Doe',
  subject: 'Welcome to Our Service',
  body: '<h1>Welcome!</h1><p>Thank you for signing up.</p>',
  tag: 'welcome-email',
  variables: {
    username: 'johndoe'
  }
};

lemn.transactional.send(messageData)
  .then(result => console.log('Email sent:', result))
  .catch(error => console.error('Email sending failed:', error));
```

## Error Handling

All methods return Promises and can be caught for error handling:

```javascript
lemn.lists.create('New List')
  .then(result => console.log(result))
  .catch(error => {
    console.error('API Error:', error.message);
    // Handle specific error scenarios
  });
```

## Dependencies

- `node-fetch`: For making HTTP requests
- `form-data`: For handling multipart form data (file uploads)

## Minimum Node.js Version

This package requires Node.js version 16 or higher due to fetch and async/await usage.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License

## Support

For support, please contact manojk030303@gmail.com (dev) , mail@normanszobotka.com (founder) or visit [\[lemon guides and usecases\]](https://lemon.email/guides-and-use-cases)

## Disclaimer

This is an unofficial Node.js client for the Lemn API. Always refer to the official Lemn documentation for the most up-to-date API specifications.

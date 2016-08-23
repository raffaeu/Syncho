Syncho Domain Model
===================
Following is the Domain Model adopted by Syncho APIs. It is divided by APIs as following:

Syncho Application
------------------
The *Application* Domain Model contains all objects used by Syncho to manage synchronizations between the various Applications avaialble in Syncho.

With this APIs, you can not only retrieve the current available Applications and their configurations but you can also submit to Syncho a new Application for review or create your own Application.

.. IMPORTANT::
   Beware, in order to submit an App or to modify or delete an existing App from Syncho, you need special Permissions, otherwise your requests will return a 401 response (Not Authorized).

App
~~~
The App object represents one of the available Applications in Syncho and it has the following structure:

.. code-block:: json

   {
	"id": 1,
	"name": "Gmail",
	"description": "   E-mail web service provided by Google.",
	"url": "https://mail.google.com",
	"sdk": "https://developers.google.com/gmail/api/",
	"created_at": 1471877331769,
	"updated_at": 1471877331769
   }

It can be managed by the following HTTP REST APIs:

.. code-block:: python

   Get a list of available Apps
   $ CURL GET https://api.syncho.com/apps/

   Get a specific App by id
   $ CURL GET https://api.syncho.com/apps/1

   Create a new App
   $ CURL POST https://api.syncho.com/apps/

   Delete an existing App
   $ CURL DELETE https://api.syncho.com/apps/1

App Event
~~~~~
An Event is a thing that happens or take in place in a certain situation.
For example, an event can be triggered by your Mail application when a new e-mail message has been received, or by your Accounting software when a new Payment has been sent into your bank account.

An Event is part of an App and it is contained inside an App with the following structure:

.. code-block:: json

   {
	"id": 45,
	"name": "New E-mail",
	"description": "Event triggered when a new e-mail is received.",
	"created_at": 1471877331769,
	"updated_at": 1471877331769,
	"appId": 1
   }

It can be managed through the App HTTP REST APIs:

.. code-block:: python

   Get a list of available Events for one App
   $ CURL GET https://api.syncho.com/apps/1/events

   Get a specific Event by id for one App
   $ CURL GET https://api.syncho.com/apps/1/events/1

   Create a new Event for an App
   $ CURL POST https://api.syncho.com/apps/1/events

   Delete an existing Event of an App
   $ CURL DELETE https://api.syncho.com/apps/1/events/1
 
And you can also retrieve all Events related to an App by using the *$expand* attribute as following:

.. code-block:: python

   Get a list of available Events for one App
   $ CURL GET https://api.syncho.com/apps?$expand=events

   Get a specific Event by id for one App
   $ CURL GET https://api.syncho.com/apps/1?$expand=events

App Action
~~~~~~~~~~
An Action is a method that allows interaction with the data exposed by the App. For example, an Action can let you create a new e-mail message from Gmail or can let you create a new Note inside Evernote.
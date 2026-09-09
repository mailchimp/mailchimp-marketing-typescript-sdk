# Reference
## root
<details><summary><code>client.root.<a href="/src/api/resources/root/client/Client.ts">list</a>({ ...params }) -> Mailchimp.ListRootResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get links to all other resources available in the API.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.root.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListRootRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RootClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AccountExports
<details><summary><code>client.accountExports.<a href="/src/api/resources/accountExports/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.ListAccountExportsResponse.Exports.Item, Mailchimp.ListAccountExportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of account exports for a given account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accountExports.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accountExports.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListAccountExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountExportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accountExports.<a href="/src/api/resources/accountExports/client/Client.ts">create</a>({ ...params }) -> Mailchimp.CreateAccountExportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new account export in your Mailchimp account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountExports.create({
    include_stages: ["audiences", "gallery_files"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateAccountExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountExportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accountExports.<a href="/src/api/resources/accountExports/client/Client.ts">get</a>({ ...params }) -> Mailchimp.GetAccountExportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific account export.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountExports.get({
    export_id: "export_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetAccountExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountExportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ActivityFeed
<details><summary><code>client.activityFeed.<a href="/src/api/resources/activityFeed/client/Client.ts">list</a>() -> Mailchimp.ListActivityFeedResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about the activity feed endpoint's resources.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.activityFeed.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ActivityFeedClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.activityFeed.<a href="/src/api/resources/activityFeed/client/Client.ts">listChimpChatter</a>({ ...params }) -> core.Page&lt;Mailchimp.ListChimpChatterActivityFeedResponse.ChimpChatter.Item, Mailchimp.ListChimpChatterActivityFeedResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the Chimp Chatter for this account ordered by most recent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.activityFeed.listChimpChatter();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.activityFeed.listChimpChatter();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListChimpChatterActivityFeedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActivityFeedClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AuthorizedApps
<details><summary><code>client.authorizedApps.<a href="/src/api/resources/authorizedApps/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.ListAuthorizedAppsResponse.Apps.Item, Mailchimp.ListAuthorizedAppsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of an account's registered, connected applications.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.authorizedApps.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.authorizedApps.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListAuthorizedAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizedAppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.authorizedApps.<a href="/src/api/resources/authorizedApps/client/Client.ts">get</a>({ ...params }) -> Mailchimp.GetAuthorizedAppsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific authorized application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authorizedApps.get({
    app_id: "app_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetAuthorizedAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizedAppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## automations
<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.AutomationWorkflow, Mailchimp.ListAutomationsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a summary of an account's classic automations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.automations.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.automations.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">create</a>({ ...params }) -> Mailchimp.AutomationWorkflow</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new classic automation in your Mailchimp account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.create({
    recipients: {},
    trigger_settings: {
        workflow_type: "abandonedBrowse"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">get</a>({ ...params }) -> Mailchimp.AutomationWorkflow</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a summary of an individual classic automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.get({
    workflow_id: "workflow_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">createActionArchive</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archiving will permanently end your automation and keep the report data. You’ll be able to replicate your archived automation, but you can’t restart it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.createActionArchive({
    workflow_id: "workflow_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionArchiveAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">createActionPauseAllEmail</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pause all emails in a specific classic automation workflow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.createActionPauseAllEmail({
    workflow_id: "workflow_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionPauseAllEmailAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">createActionStartAllEmail</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start all emails in a classic automation workflow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.createActionStartAllEmail({
    workflow_id: "workflow_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionStartAllEmailAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">listEmails</a>({ ...params }) -> Mailchimp.ListEmailsAutomationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a summary of the emails in a classic automation workflow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.listEmails({
    workflow_id: "workflow_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListEmailsAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">getEmail</a>({ ...params }) -> Mailchimp.AutomationWorkflowEmail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about an individual classic automation workflow email.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.getEmail({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetEmailAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">deleteEmail</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes an individual classic automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.deleteEmail({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteEmailAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">updateEmail</a>({ ...params }) -> Mailchimp.AutomationWorkflowEmail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update settings for a classic automation workflow email.  Only works with workflows of type: abandonedBrowse, abandonedCart, emailFollowup, or singleWelcome.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.updateEmail({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateEmailAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">createEmailActionPause</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pause an automated email.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.createEmailActionPause({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateEmailActionPauseAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">createEmailActionStart</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start an automated email.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.createEmailActionStart({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateEmailActionStartAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">listEmailQueue</a>({ ...params }) -> Mailchimp.ListEmailQueueAutomationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a classic automation email queue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.listEmailQueue({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListEmailQueueAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">createEmailQueue</a>({ ...params }) -> Mailchimp.SubscriberInAutomationQueue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an API 3.0 workflow type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.createEmailQueue({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id",
    email_address: "email_address"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateEmailQueueAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">getEmailQueue</a>({ ...params }) -> Mailchimp.SubscriberInAutomationQueue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific subscriber in a classic automation email queue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.getEmailQueue({
    workflow_id: "workflow_id",
    workflow_email_id: "workflow_email_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetEmailQueueAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">listRemovedSubscribers</a>({ ...params }) -> Mailchimp.ListRemovedSubscribersAutomationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about subscribers who were removed from a classic automation workflow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.listRemovedSubscribers({
    workflow_id: "workflow_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListRemovedSubscribersAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">createRemovedSubscriber</a>({ ...params }) -> Mailchimp.SubscriberRemovedFromAutomationWorkflow</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.createRemovedSubscriber({
    workflow_id: "workflow_id",
    email_address: "email_address"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateRemovedSubscriberAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">getRemovedSubscriber</a>({ ...params }) -> Mailchimp.SubscriberRemovedFromAutomationWorkflow</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific subscriber who was removed from a classic automation workflow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.getRemovedSubscriber({
    workflow_id: "workflow_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetRemovedSubscriberAutomationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BatchWebhooks
<details><summary><code>client.batchWebhooks.<a href="/src/api/resources/batchWebhooks/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.BatchWebhook, Mailchimp.ListBatchWebhooksResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all webhooks that have been configured for batches.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.batchWebhooks.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.batchWebhooks.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListBatchWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batchWebhooks.<a href="/src/api/resources/batchWebhooks/client/Client.ts">create</a>({ ...params }) -> Mailchimp.BatchWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batchWebhooks.create({
    url: "http://yourdomain.com/webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateBatchWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batchWebhooks.<a href="/src/api/resources/batchWebhooks/client/Client.ts">get</a>({ ...params }) -> Mailchimp.BatchWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific batch webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batchWebhooks.get({
    batch_webhook_id: "batch_webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetBatchWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batchWebhooks.<a href="/src/api/resources/batchWebhooks/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a batch webhook. Webhooks will no longer be sent to the given URL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batchWebhooks.delete({
    batch_webhook_id: "batch_webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteBatchWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batchWebhooks.<a href="/src/api/resources/batchWebhooks/client/Client.ts">update</a>({ ...params }) -> Mailchimp.BatchWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a webhook that will fire whenever any batch request completes processing.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batchWebhooks.update({
    batch_webhook_id: "batch_webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateBatchWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## batches
<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.Batch, Mailchimp.ListBatchesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a summary of batch requests that have been made.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.batches.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.batches.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListBatchesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">create</a>({ ...params }) -> Mailchimp.Batch</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Begin processing a batch operations request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batches.create({
    operations: [{
            method: "GET",
            path: "/lists"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateBatchesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">get</a>({ ...params }) -> Mailchimp.Batch</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the status of a batch request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batches.get({
    batch_id: "batch_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetBatchesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batches.delete({
    batch_id: "batch_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteBatchesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CampaignFolders
<details><summary><code>client.campaignFolders.<a href="/src/api/resources/campaignFolders/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.CampaignFolders.Folders.Item, Mailchimp.CampaignFolders&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all folders used to organize campaigns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.campaignFolders.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.campaignFolders.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListCampaignFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaignFolders.<a href="/src/api/resources/campaignFolders/client/Client.ts">create</a>({ ...params }) -> Mailchimp.CampaignFolders</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new campaign folder.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaignFolders.create({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateCampaignFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaignFolders.<a href="/src/api/resources/campaignFolders/client/Client.ts">get</a>({ ...params }) -> Mailchimp.GetCampaignFoldersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific folder used to organize campaigns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaignFolders.get({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetCampaignFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaignFolders.<a href="/src/api/resources/campaignFolders/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaignFolders.delete({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteCampaignFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaignFolders.<a href="/src/api/resources/campaignFolders/client/Client.ts">update</a>({ ...params }) -> Mailchimp.UpdateCampaignFoldersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific folder used to organize campaigns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaignFolders.update({
    folder_id: "folder_id",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateCampaignFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## campaigns
<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.Campaigns, Mailchimp.ListCampaignsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all campaigns in an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.campaigns.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.campaigns.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">create</a>({ ...params }) -> Mailchimp.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Mailchimp campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.create({
    type: "regular"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">get</a>({ ...params }) -> Mailchimp.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.get({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a campaign from your Mailchimp account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.delete({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">update</a>({ ...params }) -> Mailchimp.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update some or all of the settings for a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.update({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionCancelSend</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with Mailchimp Pro.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionCancelSend({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionCancelSendCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionCreateResend</a>({ ...params }) -> Mailchimp.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove the guesswork for resending a campaign to certain segments. You can use this endpoint as a shortcut to replicate a campaign and resend it to common segments, such as those who didn't open the campaign, or any new subscribers since it was sent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionCreateResend({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionCreateResendCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionPause</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pause an RSS-Driven campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionPause({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionPauseCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionReplicate</a>({ ...params }) -> Mailchimp.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replicate a campaign in saved or send status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionReplicate({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionReplicateCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionResume</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resume an RSS-Driven campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionResume({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionResumeCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionSchedule</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedule a campaign for delivery. If you're using Multivariate Campaigns to test send times or sending RSS Campaigns, use the send action instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionSchedule({
    campaign_id: "campaign_id",
    schedule_time: "2024-01-15T09:30:00Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionScheduleCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionSend</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionSend({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionSendCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionTest</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a test email.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionTest({
    campaign_id: "campaign_id",
    send_type: "html",
    test_emails: ["test_emails"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionTestCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createActionUnschedule</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unschedule a scheduled campaign that hasn't started sending.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createActionUnschedule({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionUnscheduleCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">getContent</a>({ ...params }) -> Mailchimp.CampaignContent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the the HTML and plain-text content for a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.getContent({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetContentCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">upsertContent</a>({ ...params }) -> Mailchimp.CampaignContent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Set the content for a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.upsertContent({
    campaign_id: "campaign_id",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpsertContentCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">listFeedback</a>({ ...params }) -> Mailchimp.ListFeedbackCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get team feedback while you're working together on a Mailchimp campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.listFeedback({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListFeedbackCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">createFeedback</a>({ ...params }) -> Mailchimp.CreateFeedbackCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add feedback on a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.createFeedback({
    campaign_id: "campaign_id",
    message: "message"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateFeedbackCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">getFeedback</a>({ ...params }) -> Mailchimp.CampaignFeedback</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific feedback message from a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.getFeedback({
    campaign_id: "campaign_id",
    feedback_id: "feedback_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetFeedbackCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">deleteFeedback</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a specific feedback message for a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.deleteFeedback({
    campaign_id: "campaign_id",
    feedback_id: "feedback_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteFeedbackCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">updateFeedback</a>({ ...params }) -> Mailchimp.CampaignFeedback</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific feedback message for a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.updateFeedback({
    campaign_id: "campaign_id",
    feedback_id: "feedback_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateFeedbackCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">listSendChecklist</a>({ ...params }) -> Mailchimp.ListSendChecklistCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Review the send checklist for a campaign, and resolve any issues before sending.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.listSendChecklist({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSendChecklistCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ConnectedSites
<details><summary><code>client.connectedSites.<a href="/src/api/resources/connectedSites/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.ConnectedSite, Mailchimp.ListConnectedSitesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all connected sites in an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.connectedSites.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.connectedSites.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListConnectedSitesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectedSitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.connectedSites.<a href="/src/api/resources/connectedSites/client/Client.ts">create</a>({ ...params }) -> Mailchimp.ConnectedSite</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Mailchimp connected site.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connectedSites.create({
    domain: "example.com",
    foreign_id: "MC001"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateConnectedSitesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectedSitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.connectedSites.<a href="/src/api/resources/connectedSites/client/Client.ts">get</a>({ ...params }) -> Mailchimp.ConnectedSite</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific connected site.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connectedSites.get({
    connected_site_id: "connected_site_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetConnectedSitesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectedSitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.connectedSites.<a href="/src/api/resources/connectedSites/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a connected site from your Mailchimp account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connectedSites.delete({
    connected_site_id: "connected_site_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteConnectedSitesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectedSitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.connectedSites.<a href="/src/api/resources/connectedSites/client/Client.ts">createActionVerifyScriptInstallation</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verify that the connected sites script has been installed, either via the script URL or fragment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connectedSites.createActionVerifyScriptInstallation({
    connected_site_id: "connected_site_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionVerifyScriptInstallationConnectedSitesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectedSitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## conversations
<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.Conversation, Mailchimp.ListConversationsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.conversations.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.conversations.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">get</a>({ ...params }) -> Mailchimp.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.get({
    conversation_id: "conversation_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">listMessages</a>({ ...params }) -> Mailchimp.ListMessagesConversationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.listMessages({
    conversation_id: "conversation_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMessagesConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">getMessage</a>({ ...params }) -> Mailchimp.ConversationMessage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.getMessage({
    conversation_id: "conversation_id",
    message_id: "message_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetMessageConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CustomerJourneys
<details><summary><code>client.customerJourneys.<a href="/src/api/resources/customerJourneys/client/Client.ts">createJourneyStepActionTrigger</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A step trigger in an Automation flow. To use it, create a starting point or step from the Automation flow builder in the app using the Customer Journeys API condition. We’ll provide a url during the process that includes the {journey_id} and {step_id}. You’ll then be able to use this endpoint to trigger the condition for the posted contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customerJourneys.createJourneyStepActionTrigger({
    journey_id: 1,
    step_id: 1,
    email_address: "email_address"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateJourneyStepActionTriggerCustomerJourneysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerJourneysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ecommerce
<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">list</a>() -> Mailchimp.ListEcommerceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about the e-commerce endpoint's resources.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listOrders</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceOrder, Mailchimp.ListOrdersEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about an account's orders.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listOrders();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listOrders();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListOrdersEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStores</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceStore, Mailchimp.ListStoresEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about all stores in the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStores();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStores();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoresEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStore</a>({ ...params }) -> Mailchimp.ECommerceStore</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new store to your Mailchimp account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStore({
    currency_code: "USD",
    id: "example_store",
    list_id: "1a2df69511",
    name: "Freddie's Cat Hat Emporium"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStore</a>({ ...params }) -> Mailchimp.ECommerceStore</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStore({
    store_id: "store_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStore</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStore({
    store_id: "store_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStore</a>({ ...params }) -> Mailchimp.ECommerceStore</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStore({
    store_id: "store_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreCarts</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceCart, Mailchimp.ListStoreCartsEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a store's carts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreCarts({
    store_id: "store_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreCarts({
    store_id: "store_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreCartsEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreCart</a>({ ...params }) -> Mailchimp.ECommerceCart</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new cart to a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreCart({
    store_id: "store_id",
    currency_code: "currency_code",
    customer: {
        id: "id"
    },
    id: "id",
    lines: [{
            id: "id",
            price: 1.1,
            product_id: "product_id",
            product_variant_id: "product_variant_id",
            quantity: 1
        }],
    order_total: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreCartEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreCart</a>({ ...params }) -> Mailchimp.ECommerceCart</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific cart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreCart({
    store_id: "store_id",
    cart_id: "cart_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreCartEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreCart</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a cart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreCart({
    store_id: "store_id",
    cart_id: "cart_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreCartEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreCart</a>({ ...params }) -> Mailchimp.ECommerceCart</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific cart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreCart({
    store_id: "store_id",
    cart_id: "cart_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreCartEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreCartLines</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceCartLineItem, Mailchimp.ListStoreCartLinesEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a cart's line items.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreCartLines({
    store_id: "store_id",
    cart_id: "cart_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreCartLines({
    store_id: "store_id",
    cart_id: "cart_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreCartLinesEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreCartLine</a>({ ...params }) -> Mailchimp.ECommerceCartLineItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new line item to an existing cart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreCartLine({
    store_id: "store_id",
    cart_id: "cart_id",
    id: "id",
    price: 1.1,
    product_id: "product_id",
    product_variant_id: "product_variant_id",
    quantity: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreCartLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreCartLine</a>({ ...params }) -> Mailchimp.ECommerceCartLineItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific cart line item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreCartLine({
    store_id: "store_id",
    cart_id: "cart_id",
    line_id: "line_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreCartLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreCartLine</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific cart line item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreCartLine({
    store_id: "store_id",
    cart_id: "cart_id",
    line_id: "line_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreCartLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreCartLine</a>({ ...params }) -> Mailchimp.ECommerceCartLineItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific cart line item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreCartLine({
    store_id: "store_id",
    cart_id: "cart_id",
    line_id: "line_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreCartLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreCustomers</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceCustomer, Mailchimp.ListStoreCustomersEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a store's customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreCustomers({
    store_id: "store_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreCustomers({
    store_id: "store_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreCustomersEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreCustomer</a>({ ...params }) -> Mailchimp.ECommerceCustomer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new customer to a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreCustomer({
    store_id: "store_id",
    id: "id",
    opt_in_status: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreCustomerEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreCustomer</a>({ ...params }) -> Mailchimp.ECommerceCustomer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific customer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreCustomer({
    store_id: "store_id",
    customer_id: "customer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreCustomerEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">upsertStoreCustomer</a>({ ...params }) -> Mailchimp.ECommerceCustomer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add or update a customer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.upsertStoreCustomer({
    store_id: "store_id",
    customer_id: "customer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpsertStoreCustomerEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreCustomer</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a customer from a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreCustomer({
    store_id: "store_id",
    customer_id: "customer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreCustomerEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreCustomer</a>({ ...params }) -> Mailchimp.ECommerceCustomer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a customer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreCustomer({
    store_id: "store_id",
    customer_id: "customer_id",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreCustomerEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreOrders</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceOrder, Mailchimp.ListStoreOrdersEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a store's orders.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreOrders({
    store_id: "store_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreOrders({
    store_id: "store_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreOrdersEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreOrder</a>({ ...params }) -> Mailchimp.ECommerceOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new order to a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreOrder({
    store_id: "store_id",
    currency_code: "currency_code",
    customer: {
        id: "id"
    },
    id: "id",
    lines: [{
            id: "id",
            price: 1.1,
            product_id: "product_id",
            product_variant_id: "product_variant_id",
            quantity: 1
        }],
    order_total: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreOrderEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreOrder</a>({ ...params }) -> Mailchimp.ECommerceOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreOrder({
    store_id: "store_id",
    order_id: "order_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreOrderEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreOrder</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreOrder({
    store_id: "store_id",
    order_id: "order_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreOrderEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreOrder</a>({ ...params }) -> Mailchimp.ECommerceOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreOrder({
    store_id: "store_id",
    order_id: "order_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreOrderEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreOrderLines</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceOrderLineItem, Mailchimp.ListStoreOrderLinesEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about an order's line items.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreOrderLines({
    store_id: "store_id",
    order_id: "order_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreOrderLines({
    store_id: "store_id",
    order_id: "order_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreOrderLinesEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreOrderLine</a>({ ...params }) -> Mailchimp.ECommerceOrderLineItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new line item to an existing order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreOrderLine({
    store_id: "store_id",
    order_id: "order_id",
    id: "id",
    price: 1.1,
    product_id: "product_id",
    product_variant_id: "product_variant_id",
    quantity: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreOrderLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreOrderLine</a>({ ...params }) -> Mailchimp.ECommerceOrderLineItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific order line item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreOrderLine({
    store_id: "store_id",
    order_id: "order_id",
    line_id: "line_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreOrderLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreOrderLine</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific order line item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreOrderLine({
    store_id: "store_id",
    order_id: "order_id",
    line_id: "line_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreOrderLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreOrderLine</a>({ ...params }) -> Mailchimp.ECommerceOrderLineItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific order line item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreOrderLine({
    store_id: "store_id",
    order_id: "order_id",
    line_id: "line_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreOrderLineEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreProducts</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceProduct, Mailchimp.ListStoreProductsEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a store's products.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreProducts({
    store_id: "store_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreProducts({
    store_id: "store_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreProductsEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreProduct</a>({ ...params }) -> Mailchimp.ECommerceProduct</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new product to a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreProduct({
    store_id: "store_id",
    body: {
        id: "id",
        title: "Cat Hat",
        variants: [{
                id: "id",
                title: "Cat Hat"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreProductEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreProduct</a>({ ...params }) -> Mailchimp.ECommerceProduct</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreProduct({
    store_id: "store_id",
    product_id: "product_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreProductEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">upsertStoreProduct</a>({ ...params }) -> Mailchimp.ECommerceProduct</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.upsertStoreProduct({
    store_id: "store_id",
    product_id: "product_id",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpsertStoreProductEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreProduct</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreProduct({
    store_id: "store_id",
    product_id: "product_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreProductEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreProduct</a>({ ...params }) -> Mailchimp.ECommerceProduct</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreProduct({
    store_id: "store_id",
    product_id: "product_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreProductEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreProductImages</a>({ ...params }) -> core.Page&lt;Mailchimp.ListStoreProductImagesEcommerceResponse.Images.Item, Mailchimp.ListStoreProductImagesEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a product's images.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreProductImages({
    store_id: "store_id",
    product_id: "product_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreProductImages({
    store_id: "store_id",
    product_id: "product_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreProductImagesEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreProductImage</a>({ ...params }) -> Mailchimp.CreateStoreProductImageEcommerceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new image to the product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreProductImage({
    store_id: "store_id",
    product_id: "product_id",
    id: "id",
    url: "url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreProductImageEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreProductImage</a>({ ...params }) -> Mailchimp.GetStoreProductImageEcommerceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific product image.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreProductImage({
    store_id: "store_id",
    product_id: "product_id",
    image_id: "image_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreProductImageEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreProductImage</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a product image.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreProductImage({
    store_id: "store_id",
    product_id: "product_id",
    image_id: "image_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreProductImageEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreProductImage</a>({ ...params }) -> Mailchimp.UpdateStoreProductImageEcommerceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a product image.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreProductImage({
    store_id: "store_id",
    product_id: "product_id",
    image_id: "image_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreProductImageEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStoreProductVariants</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommerceProductVariant, Mailchimp.ListStoreProductVariantsEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a product's variants.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStoreProductVariants({
    store_id: "store_id",
    product_id: "product_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStoreProductVariants({
    store_id: "store_id",
    product_id: "product_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStoreProductVariantsEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStoreProductVariant</a>({ ...params }) -> Mailchimp.ECommerceProductVariant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new variant to the product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStoreProductVariant({
    store_id: "store_id",
    product_id: "product_id",
    id: "id",
    title: "Cat Hat"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStoreProductVariantEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStoreProductVariant</a>({ ...params }) -> Mailchimp.ECommerceProductVariant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific product variant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStoreProductVariant({
    store_id: "store_id",
    product_id: "product_id",
    variant_id: "variant_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStoreProductVariantEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">upsertStoreProductVariant</a>({ ...params }) -> Mailchimp.ECommerceProductVariant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add or update a product variant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.upsertStoreProductVariant({
    store_id: "store_id",
    product_id: "product_id",
    variant_id: "variant_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpsertStoreProductVariantEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStoreProductVariant</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a product variant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStoreProductVariant({
    store_id: "store_id",
    product_id: "product_id",
    variant_id: "variant_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStoreProductVariantEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStoreProductVariant</a>({ ...params }) -> Mailchimp.ECommerceProductVariant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a product variant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStoreProductVariant({
    store_id: "store_id",
    product_id: "product_id",
    variant_id: "variant_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStoreProductVariantEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStorePromoRules</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommercePromoRule, Mailchimp.ListStorePromoRulesEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a store's promo rules.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStorePromoRules({
    store_id: "store_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStorePromoRules({
    store_id: "store_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStorePromoRulesEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStorePromoRule</a>({ ...params }) -> Mailchimp.ECommercePromoRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new promo rule to a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStorePromoRule({
    store_id: "store_id",
    amount: 1.1,
    description: "Save BIG during our summer sale!",
    id: "id",
    target: "per_item",
    type: "fixed"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStorePromoRuleEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStorePromoRule</a>({ ...params }) -> Mailchimp.ECommercePromoRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific promo rule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStorePromoRule({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStorePromoRuleEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStorePromoRule</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a promo rule from a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStorePromoRule({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStorePromoRuleEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStorePromoRule</a>({ ...params }) -> Mailchimp.ECommercePromoRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a promo rule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStorePromoRule({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStorePromoRuleEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">listStorePromoRulePromoCodes</a>({ ...params }) -> core.Page&lt;Mailchimp.ECommercePromoCode, Mailchimp.ListStorePromoRulePromoCodesEcommerceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a store's promo codes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ecommerce.listStorePromoRulePromoCodes({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ecommerce.listStorePromoRulePromoCodes({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListStorePromoRulePromoCodesEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">createStorePromoRulePromoCode</a>({ ...params }) -> Mailchimp.ECommercePromoCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new promo code to a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.createStorePromoRulePromoCode({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id",
    code: "summersale",
    id: "id",
    redemption_url: "A url that applies promo code directly at checkout or a url that points to sale page or store url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateStorePromoRulePromoCodeEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">getStorePromoRulePromoCode</a>({ ...params }) -> Mailchimp.ECommercePromoCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific promo code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.getStorePromoRulePromoCode({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id",
    promo_code_id: "promo_code_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetStorePromoRulePromoCodeEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">deleteStorePromoRulePromoCode</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a promo code from a store.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.deleteStorePromoRulePromoCode({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id",
    promo_code_id: "promo_code_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteStorePromoRulePromoCodeEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ecommerce.<a href="/src/api/resources/ecommerce/client/Client.ts">updateStorePromoRulePromoCode</a>({ ...params }) -> Mailchimp.ECommercePromoCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a promo code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ecommerce.updateStorePromoRulePromoCode({
    store_id: "store_id",
    promo_rule_id: "promo_rule_id",
    promo_code_id: "promo_code_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateStorePromoRulePromoCodeEcommerceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FacebookAds
<details><summary><code>client.facebookAds.<a href="/src/api/resources/facebookAds/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.FacebookAds, Mailchimp.ListFacebookAdsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get list of Facebook ads.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.facebookAds.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.facebookAds.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListFacebookAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FacebookAdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.facebookAds.<a href="/src/api/resources/facebookAds/client/Client.ts">get</a>({ ...params }) -> Mailchimp.FacebookAds</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details of a Facebook ad.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.facebookAds.get({
    outreach_id: "outreach_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetFacebookAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FacebookAdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FileManager
<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">list</a>() -> Mailchimp.ListFileManagerResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about the file-manager endpoint's resources
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">listFiles</a>({ ...params }) -> core.Page&lt;Mailchimp.GalleryFile, Mailchimp.ListFilesFileManagerResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of available images and files stored in the File Manager for the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.fileManager.listFiles();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.fileManager.listFiles();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListFilesFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">createFile</a>({ ...params }) -> Mailchimp.GalleryFile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a new image or file to the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.createFile({
    file_data: "file_data",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateFileFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">getFile</a>({ ...params }) -> Mailchimp.GalleryFile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific file in the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.getFile({
    file_id: "file_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetFileFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">deleteFile</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a specific file from the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.deleteFile({
    file_id: "file_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteFileFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">updateFile</a>({ ...params }) -> Mailchimp.GalleryFile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a file in the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.updateFile({
    file_id: "file_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateFileFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">listFolders</a>({ ...params }) -> core.Page&lt;Mailchimp.ListFoldersFileManagerResponse.Folders.Item, Mailchimp.ListFoldersFileManagerResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all folders in the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.fileManager.listFolders();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.fileManager.listFolders();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListFoldersFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">createFolder</a>({ ...params }) -> Mailchimp.CreateFolderFileManagerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new folder in the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.createFolder({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateFolderFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">getFolder</a>({ ...params }) -> Mailchimp.GetFolderFileManagerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific folder in the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.getFolder({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetFolderFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">deleteFolder</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific folder in the File Manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.deleteFolder({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteFolderFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">updateFolder</a>({ ...params }) -> Mailchimp.UpdateFolderFileManagerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific File Manager folder.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fileManager.updateFolder({
    folder_id: "folder_id",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateFolderFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fileManager.<a href="/src/api/resources/fileManager/client/Client.ts">listFolderFiles</a>({ ...params }) -> core.Page&lt;Mailchimp.GalleryFile, Mailchimp.ListFolderFilesFileManagerResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of available images and files stored in this folder.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.fileManager.listFolderFiles({
    folder_id: "folder_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.fileManager.listFolderFiles({
    folder_id: "folder_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListFolderFilesFileManagerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileManagerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## LandingPages
<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">list</a>({ ...params }) -> Mailchimp.ListLandingPagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all landing pages.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">create</a>({ ...params }) -> Mailchimp.LandingPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an unpublished and contentless Mailchimp landing page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">get</a>({ ...params }) -> Mailchimp.LandingPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.get({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a landing page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.delete({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">update</a>({ ...params }) -> Mailchimp.LandingPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a landing page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.update({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">createActionPublish</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publish a landing page that is in draft, unpublished, or has been previously published and edited.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.createActionPublish({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionPublishLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">createActionUnpublish</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unpublish a landing page that is in draft or has been published.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.createActionUnpublish({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionUnpublishLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landingPages.<a href="/src/api/resources/landingPages/client/Client.ts">listContent</a>({ ...params }) -> Mailchimp.ListContentLandingPagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the the HTML for your landing page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landingPages.listContent({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListContentLandingPagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandingPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## lists
<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.SubscriberList, Mailchimp.ListListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about all lists in the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">create</a>({ ...params }) -> Mailchimp.SubscriberList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new list in your Mailchimp account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.create({
    campaign_defaults: {
        from_email: "from_email",
        from_name: "from_name",
        language: "language",
        subject: "subject"
    },
    contact: {
        address1: "address1",
        city: "city",
        company: "company",
        country: "country"
    },
    email_type_option: true,
    name: "name",
    permission_reminder: "permission_reminder"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">get</a>({ ...params }) -> Mailchimp.SubscriberList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.get({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">batchSubscribeOrUnsubscribe</a>({ ...params }) -> Mailchimp.BatchSubscribeOrUnsubscribeListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Batch subscribe or unsubscribe list members.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.batchSubscribeOrUnsubscribe({
    list_id: "list_id",
    members: []
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.BatchSubscribeOrUnsubscribeListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a list from your Mailchimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you exported and backed up your list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.delete({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">update</a>({ ...params }) -> Mailchimp.SubscriberList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the settings for a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.update({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listAbuseReports</a>({ ...params }) -> core.Page&lt;Mailchimp.ListsAbuseReports, Mailchimp.ListAbuseReportsListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all abuse reports for a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listAbuseReports({
    list_id: "list_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listAbuseReports({
    list_id: "list_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListAbuseReportsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getAbuseReport</a>({ ...params }) -> Mailchimp.ListsAbuseReports</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about a specific abuse report.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getAbuseReport({
    list_id: "list_id",
    report_id: "report_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetAbuseReportListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listActivity</a>({ ...params }) -> core.Page&lt;Mailchimp.ListActivityListsResponse.Activity.Item, Mailchimp.ListActivityListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listActivity({
    list_id: "list_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listActivity({
    list_id: "list_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListActivityListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listClients</a>({ ...params }) -> Mailchimp.ListClientsListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of the top email clients based on user-agent strings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listClients({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListClientsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listGrowthHistory</a>({ ...params }) -> core.Page&lt;Mailchimp.GrowthHistory, Mailchimp.ListGrowthHistoryListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a month-by-month summary of a specific list's growth activity.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listGrowthHistory({
    list_id: "list_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listGrowthHistory({
    list_id: "list_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListGrowthHistoryListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getGrowthHistory</a>({ ...params }) -> Mailchimp.GrowthHistory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a summary of a specific list's growth activity for a specific month and year.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getGrowthHistory({
    list_id: "list_id",
    month: "month"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetGrowthHistoryListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listInterestCategories</a>({ ...params }) -> core.Page&lt;Mailchimp.InterestCategory, Mailchimp.ListInterestCategoriesListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a list's interest categories.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listInterestCategories({
    list_id: "list_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listInterestCategories({
    list_id: "list_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListInterestCategoriesListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createInterestCategory</a>({ ...params }) -> Mailchimp.InterestCategory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new interest category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createInterestCategory({
    list_id: "list_id",
    title: "title",
    type: "checkboxes"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateInterestCategoryListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getInterestCategory</a>({ ...params }) -> Mailchimp.InterestCategory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific interest category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getInterestCategory({
    list_id: "list_id",
    interest_category_id: "interest_category_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetInterestCategoryListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteInterestCategory</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific interest category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteInterestCategory({
    list_id: "list_id",
    interest_category_id: "interest_category_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteInterestCategoryListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateInterestCategory</a>({ ...params }) -> Mailchimp.InterestCategory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific interest category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateInterestCategory({
    list_id: "list_id",
    interest_category_id: "interest_category_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateInterestCategoryListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listInterestCategoryInterests</a>({ ...params }) -> core.Page&lt;Mailchimp.Interest, Mailchimp.ListInterestCategoryInterestsListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of this category's interests.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listInterestCategoryInterests({
    list_id: "list_id",
    interest_category_id: "interest_category_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listInterestCategoryInterests({
    list_id: "list_id",
    interest_category_id: "interest_category_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListInterestCategoryInterestsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createInterestCategoryInterest</a>({ ...params }) -> Mailchimp.Interest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new interest or 'group name' for a specific category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createInterestCategoryInterest({
    list_id: "list_id",
    interest_category_id: "interest_category_id",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateInterestCategoryInterestListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getInterestCategoryInterest</a>({ ...params }) -> Mailchimp.Interest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get interests or 'group names' for a specific category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getInterestCategoryInterest({
    list_id: "list_id",
    interest_category_id: "interest_category_id",
    interest_id: "interest_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetInterestCategoryInterestListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteInterestCategoryInterest</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete interests or group names in a specific category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteInterestCategoryInterest({
    list_id: "list_id",
    interest_category_id: "interest_category_id",
    interest_id: "interest_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteInterestCategoryInterestListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateInterestCategoryInterest</a>({ ...params }) -> Mailchimp.Interest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update interests or 'group names' for a specific category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateInterestCategoryInterest({
    list_id: "list_id",
    interest_category_id: "interest_category_id",
    interest_id: "interest_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateInterestCategoryInterestListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listLocations</a>({ ...params }) -> Mailchimp.ListLocationsListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listLocations({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListLocationsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMembers</a>({ ...params }) -> core.Page&lt;Mailchimp.ListMembers, Mailchimp.ListMembersListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about members in a specific Mailchimp list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listMembers({
    list_id: "list_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listMembers({
    list_id: "list_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMembersListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createMember</a>({ ...params }) -> Mailchimp.ListMembers</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new member to the list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createMember({
    list_id: "list_id",
    email_address: "email_address",
    status: "subscribed"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateMemberListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getMember</a>({ ...params }) -> Mailchimp.ListMembers</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getMember({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetMemberListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">upsertMember</a>({ ...params }) -> Mailchimp.ListMembers</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add or update a list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.upsertMember({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash",
    email_address: "email_address"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpsertMemberListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteMember</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archive a list member. To permanently delete, use the delete-permanent action.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteMember({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteMemberListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateMember</a>({ ...params }) -> Mailchimp.ListMembers</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update information for a specific list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateMember({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateMemberListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createMemberActionDeletePermanent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createMemberActionDeletePermanent({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateMemberActionDeletePermanentListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMemberActivity</a>({ ...params }) -> Mailchimp.ListMemberActivityListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listMemberActivity({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMemberActivityListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMemberActivityFeed</a>({ ...params }) -> core.Page&lt;unknown, Mailchimp.ListMemberActivityFeedListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a member's activity on a specific list, including opens, clicks, and unsubscribes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listMemberActivityFeed({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listMemberActivityFeed({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMemberActivityFeedListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMemberEvents</a>({ ...params }) -> core.Page&lt;Mailchimp.ListMemberEventsListsResponse.Events.Item, Mailchimp.ListMemberEventsListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get events for a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listMemberEvents({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listMemberEvents({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMemberEventsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createMemberEvent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add an event for a list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createMemberEvent({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateMemberEventListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMemberGoals</a>({ ...params }) -> Mailchimp.ListMemberGoalsListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the last 50 Goal events for a member on a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listMemberGoals({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMemberGoalsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMemberNotes</a>({ ...params }) -> core.Page&lt;Mailchimp.MemberNotes, Mailchimp.ListMemberNotesListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get recent notes for a specific list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listMemberNotes({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listMemberNotes({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMemberNotesListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createMemberNote</a>({ ...params }) -> Mailchimp.MemberNotes</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new note for a specific subscriber.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createMemberNote({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateMemberNoteListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getMemberNote</a>({ ...params }) -> Mailchimp.MemberNotes</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific note for a specific list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getMemberNote({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash",
    note_id: "note_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetMemberNoteListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteMemberNote</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific note for a specific list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteMemberNote({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash",
    note_id: "note_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteMemberNoteListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateMemberNote</a>({ ...params }) -> Mailchimp.MemberNotes</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific note for a specific list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateMemberNote({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash",
    note_id: "note_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateMemberNoteListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMemberTags</a>({ ...params }) -> core.Page&lt;Mailchimp.ListMemberTagsListsResponse.Tags.Item, Mailchimp.ListMemberTagsListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the tags on a list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listMemberTags({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listMemberTags({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMemberTagsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createMemberTag</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createMemberTag({
    list_id: "list_id",
    subscriber_hash: "subscriber_hash",
    tags: [{
            name: "name",
            status: "inactive"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateMemberTagListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listMergeFields</a>({ ...params }) -> core.Page&lt;Mailchimp.MergeField, Mailchimp.ListMergeFieldsListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all merge fields for an audience.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listMergeFields({
    list_id: "list_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listMergeFields({
    list_id: "list_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListMergeFieldsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createMergeField</a>({ ...params }) -> Mailchimp.MergeField</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new merge field for a specific audience.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createMergeField({
    list_id: "list_id",
    name: "name",
    type: "text"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateMergeFieldListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getMergeField</a>({ ...params }) -> Mailchimp.MergeField</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific merge field.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getMergeField({
    list_id: "list_id",
    merge_id: "merge_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetMergeFieldListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteMergeField</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific merge field.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteMergeField({
    list_id: "list_id",
    merge_id: "merge_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteMergeFieldListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateMergeField</a>({ ...params }) -> Mailchimp.MergeField</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific merge field.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateMergeField({
    list_id: "list_id",
    merge_id: "merge_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateMergeFieldListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listSegments</a>({ ...params }) -> core.Page&lt;Mailchimp.List, Mailchimp.ListSegmentsListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about all available segments for a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listSegments({
    list_id: "list_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listSegments({
    list_id: "list_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSegmentsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createSegment</a>({ ...params }) -> Mailchimp.List</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new segment in a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createSegment({
    list_id: "list_id",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateSegmentListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getSegment</a>({ ...params }) -> Mailchimp.List</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getSegment({
    list_id: "list_id",
    segment_id: "segment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetSegmentListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">batchAddOrRemoveMembers</a>({ ...params }) -> Mailchimp.BatchAddOrRemoveMembersListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Batch add/remove list members to static segment
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.batchAddOrRemoveMembers({
    list_id: "list_id",
    segment_id: "segment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.BatchAddOrRemoveMembersListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteSegment</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific segment in a list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteSegment({
    list_id: "list_id",
    segment_id: "segment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteSegmentListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateSegment</a>({ ...params }) -> Mailchimp.List</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific segment in a list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateSegment({
    list_id: "list_id",
    segment_id: "segment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateSegmentListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listSegmentMembers</a>({ ...params }) -> core.Page&lt;Mailchimp.ListsSegmentsMembers, Mailchimp.ListSegmentMembersListsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about members in a saved segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.lists.listSegmentMembers({
    list_id: "list_id",
    segment_id: "segment_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.lists.listSegmentMembers({
    list_id: "list_id",
    segment_id: "segment_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSegmentMembersListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createSegmentMember</a>({ ...params }) -> Mailchimp.ListsSegmentsMembers</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a member to a static segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createSegmentMember({
    list_id: "list_id",
    segment_id: "segment_id",
    email_address: "email_address"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateSegmentMemberListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteSegmentMember</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a member from the specified static segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteSegmentMember({
    list_id: "list_id",
    segment_id: "segment_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteSegmentMemberListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listSignupForms</a>({ ...params }) -> Mailchimp.ListSignupFormsListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get signup forms for a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listSignupForms({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSignupFormsListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createSignupForm</a>({ ...params }) -> Mailchimp.SignupForm</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Customize a list's default signup form.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createSignupForm({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateSignupFormListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listSurveys</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about all available surveys for a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listSurveys({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSurveysListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createSurvey</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a draft survey for an audience.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createSurvey({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateSurveyListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getSurvey</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about a specific survey.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getSurvey({
    list_id: "list_id",
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetSurveyListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteSurvey</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a survey.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteSurvey({
    list_id: "list_id",
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteSurveyListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateSurvey</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a survey. When sections is provided, send the complete section list in display order. Any existing section not included is deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateSurvey({
    list_id: "list_id",
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateSurveyListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createListSurveyActionReplicate</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replicate a survey.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createListSurveyActionReplicate({
    list_idPathParam: "list_id",
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateListSurveyActionReplicateListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listTagSearch</a>({ ...params }) -> Mailchimp.ListTagSearchListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for tags on a list by name. If no name is provided, will return all tags on the list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listTagSearch({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListTagSearchListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">listWebhooks</a>({ ...params }) -> Mailchimp.ListWebhooksListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about all webhooks for a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.listWebhooks({
    list_id: "list_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListWebhooksListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">createWebhook</a>({ ...params }) -> Mailchimp.ListWebhooks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new webhook for a specific list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.createWebhook({
    list_id: "list_id",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateWebhookListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getWebhook</a>({ ...params }) -> Mailchimp.ListWebhooks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getWebhook({
    list_id: "list_id",
    webhook_id: "webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetWebhookListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">deleteWebhook</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific webhook in a list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.deleteWebhook({
    list_id: "list_id",
    webhook_id: "webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteWebhookListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateWebhook</a>({ ...params }) -> Mailchimp.ListWebhooks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the settings for an existing webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateWebhook({
    list_id: "list_id",
    webhook_id: "webhook_id",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateWebhookListsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ListsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## surveys
<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">createListSurveyActionCreateEmail</a>({ ...params }) -> Mailchimp.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Utilize the List ID and Survey ID to generate a Campaign that links to your survey.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.createListSurveyActionCreateEmail({
    list_id: "list_id",
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateListSurveyActionCreateEmailSurveysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SurveysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">createListSurveyActionPublish</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publish a survey that is in draft, unpublished, or has been previously published and edited.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.createListSurveyActionPublish({
    list_id: "list_id",
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateListSurveyActionPublishSurveysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SurveysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">createListSurveyActionUnpublish</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unpublish a survey that has been published.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.createListSurveyActionUnpublish({
    list_id: "list_id",
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateListSurveyActionUnpublishSurveysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SurveysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ping
<details><summary><code>client.ping.<a href="/src/api/resources/ping/client/Client.ts">list</a>() -> Mailchimp.ListPingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A health check for the API that won't return any account-specific information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ping.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## reporting
<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">list</a>() -> Mailchimp.ListReportingResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about the reporting endpoint's resources.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">listFacebookAds</a>({ ...params }) -> core.Page&lt;Mailchimp.ReportingFacebookAd, Mailchimp.ListFacebookAdsReportingResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get reports of Facebook ads.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reporting.listFacebookAds();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reporting.listFacebookAds();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListFacebookAdsReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">getFacebookAd</a>({ ...params }) -> Mailchimp.ReportingFacebookAd</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get report of a Facebook ad.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.getFacebookAd({
    outreach_id: "outreach_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetFacebookAdReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">listFacebookAdEcommerceProductActivity</a>({ ...params }) -> core.Page&lt;Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponse.Products.Item, Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get breakdown of product activity for an outreach.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reporting.listFacebookAdEcommerceProductActivity({
    outreach_id: "outreach_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reporting.listFacebookAdEcommerceProductActivity({
    outreach_id: "outreach_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListFacebookAdEcommerceProductActivityReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">listLandingPages</a>({ ...params }) -> core.Page&lt;Mailchimp.LandingPageReport, Mailchimp.ListLandingPagesReportingResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get reports of landing pages.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reporting.listLandingPages();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reporting.listLandingPages();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListLandingPagesReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">getLandingPage</a>({ ...params }) -> Mailchimp.LandingPageReport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get report of a landing page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.getLandingPage({
    outreach_id: "outreach_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetLandingPageReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">listSurveys</a>({ ...params }) -> core.Page&lt;Mailchimp.ListSurveysReportingResponse.Surveys.Item, Mailchimp.ListSurveysReportingResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get reports for surveys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reporting.listSurveys();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reporting.listSurveys();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSurveysReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">getSurvey</a>({ ...params }) -> Mailchimp.GetSurveyReportingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get report for a survey.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.getSurvey({
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetSurveyReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">listSurveyQuestions</a>({ ...params }) -> Mailchimp.ListSurveyQuestionsReportingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get reports for survey questions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.listSurveyQuestions({
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSurveyQuestionsReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">getSurveyQuestion</a>({ ...params }) -> Mailchimp.SurveyQuestionReport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get report for a survey question.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.getSurveyQuestion({
    survey_id: "survey_id",
    question_id: "question_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetSurveyQuestionReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">listSurveyQuestionAnswers</a>({ ...params }) -> Mailchimp.ListSurveyQuestionAnswersReportingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get answers for a survey question.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.listSurveyQuestionAnswers({
    survey_id: "survey_id",
    question_id: "question_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSurveyQuestionAnswersReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">listSurveyResponses</a>({ ...params }) -> Mailchimp.ListSurveyResponsesReportingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get responses to a survey.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.listSurveyResponses({
    survey_id: "survey_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSurveyResponsesReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reporting.<a href="/src/api/resources/reporting/client/Client.ts">getSurveyRespons</a>({ ...params }) -> Mailchimp.GetSurveyResponsReportingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single survey response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reporting.getSurveyRespons({
    survey_id: "survey_id",
    response_id: "response_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetSurveyResponsReportingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## reports
<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.CampaignReport, Mailchimp.ListReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get campaign reports.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">get</a>({ ...params }) -> Mailchimp.CampaignReport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get report details for a specific sent campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.get({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listAbuseReports</a>({ ...params }) -> Mailchimp.ListAbuseReportsReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of abuse complaints for a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.listAbuseReports({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListAbuseReportsReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getAbuseReport</a>({ ...params }) -> Mailchimp.AbuseComplaint</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific abuse report for a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getAbuseReport({
    campaign_id: "campaign_id",
    report_id: "report_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetAbuseReportReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listAdvice</a>({ ...params }) -> Mailchimp.ListAdviceReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.listAdvice({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListAdviceReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listClickDetails</a>({ ...params }) -> core.Page&lt;Mailchimp.ClickDetailReport, Mailchimp.ListClickDetailsReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about clicks on specific links in your Mailchimp campaigns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listClickDetails({
    campaign_id: "campaign_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listClickDetails({
    campaign_id: "campaign_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListClickDetailsReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getClickDetail</a>({ ...params }) -> Mailchimp.ClickDetailReport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get click details for a specific link in a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getClickDetail({
    campaign_id: "campaign_id",
    link_id: "link_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetClickDetailReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listClickDetailMembers</a>({ ...params }) -> core.Page&lt;Mailchimp.ClickDetailMember, Mailchimp.ListClickDetailMembersReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about list members who clicked on a specific link in a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listClickDetailMembers({
    campaign_id: "campaign_id",
    link_id: "link_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listClickDetailMembers({
    campaign_id: "campaign_id",
    link_id: "link_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListClickDetailMembersReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getClickDetailMember</a>({ ...params }) -> Mailchimp.ClickDetailMember</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific subscriber who clicked a link in a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getClickDetailMember({
    campaign_id: "campaign_id",
    link_id: "link_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetClickDetailMemberReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listDomainPerformance</a>({ ...params }) -> Mailchimp.ListDomainPerformanceReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get statistics for the top-performing email domains in a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.listDomainPerformance({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListDomainPerformanceReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listEcommerceProductActivity</a>({ ...params }) -> core.Page&lt;Mailchimp.ListEcommerceProductActivityReportsResponse.Products.Item, Mailchimp.ListEcommerceProductActivityReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get breakdown of product activity for a campaign
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listEcommerceProductActivity({
    campaign_id: "campaign_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listEcommerceProductActivity({
    campaign_id: "campaign_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListEcommerceProductActivityReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listEepurl</a>({ ...params }) -> Mailchimp.ListEepurlReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a summary of social activity for the campaign, tracked by EepURL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.listEepurl({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListEepurlReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listEmailActivity</a>({ ...params }) -> core.Page&lt;Mailchimp.EmailActivity, Mailchimp.ListEmailActivityReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of member's subscriber activity in a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listEmailActivity({
    campaign_id: "campaign_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listEmailActivity({
    campaign_id: "campaign_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListEmailActivityReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getEmailActivity</a>({ ...params }) -> Mailchimp.EmailActivity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific list member's activity in a campaign including opens, clicks, and bounces.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getEmailActivity({
    campaign_id: "campaign_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetEmailActivityReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listLocations</a>({ ...params }) -> core.Page&lt;Mailchimp.ListLocationsReportsResponse.Locations.Item, Mailchimp.ListLocationsReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get top open locations for a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listLocations({
    campaign_id: "campaign_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listLocations({
    campaign_id: "campaign_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListLocationsReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listOpenDetails</a>({ ...params }) -> core.Page&lt;Mailchimp.OpenActivity, Mailchimp.ListOpenDetailsReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get detailed information about any campaign emails that were opened by a list member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listOpenDetails({
    campaign_id: "campaign_id",
    since: "2016-04-12 12:00:00"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listOpenDetails({
    campaign_id: "campaign_id",
    since: "2016-04-12 12:00:00"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListOpenDetailsReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getOpenDetail</a>({ ...params }) -> Mailchimp.OpenActivity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific subscriber who opened a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getOpenDetail({
    campaign_id: "campaign_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetOpenDetailReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listSentTo</a>({ ...params }) -> core.Page&lt;Mailchimp.SentTo, Mailchimp.ListSentToReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about campaign recipients.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listSentTo({
    campaign_id: "campaign_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listSentTo({
    campaign_id: "campaign_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSentToReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getSentTo</a>({ ...params }) -> Mailchimp.SentTo</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific campaign recipient.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getSentTo({
    campaign_id: "campaign_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetSentToReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listSubReports</a>({ ...params }) -> Mailchimp.ListSubReportsReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of reports with child campaigns for a specific parent campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.listSubReports({
    campaign_id: "campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSubReportsReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listUnsubscribed</a>({ ...params }) -> core.Page&lt;Mailchimp.Unsubscribes, Mailchimp.ListUnsubscribedReportsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about members who have unsubscribed from a specific campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.listUnsubscribed({
    campaign_id: "campaign_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.listUnsubscribed({
    campaign_id: "campaign_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListUnsubscribedReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getUnsubscribed</a>({ ...params }) -> Mailchimp.Unsubscribes</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific list member who unsubscribed from a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getUnsubscribed({
    campaign_id: "campaign_id",
    subscriber_hash: "subscriber_hash"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetUnsubscribedReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SearchCampaigns
<details><summary><code>client.searchCampaigns.<a href="/src/api/resources/searchCampaigns/client/Client.ts">list</a>({ ...params }) -> Mailchimp.ListSearchCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search all campaigns for the specified query terms.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchCampaigns.list({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSearchCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SmsCampaigns
<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.SmsCampaign, Mailchimp.ListSmsCampaignsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all SMS campaigns in an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.smsCampaigns.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.smsCampaigns.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">create</a>({ ...params }) -> Mailchimp.SmsCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new SMS campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.create({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">get</a>({ ...params }) -> Mailchimp.SmsCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the details for a single SMS campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.get({
    sms_campaign_id: "sms_campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a campaign from your Mailchimp account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.delete({
    sms_campaign_id: "sms_campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">update</a>({ ...params }) -> Mailchimp.SmsCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an SMS campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.update({
    sms_campaign_id: "sms_campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">createActionCancelSend</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a scheduled or sending SMS campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.createActionCancelSend({
    sms_campaign_id: "sms_campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionCancelSendSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">createActionSchedule</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedule an SMS campaign for delivery.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.createActionSchedule({
    sms_campaign_id: "sms_campaign_id",
    schedule_time: "2024-01-15T09:30:00Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionScheduleSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">createActionSend</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an SMS campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.createActionSend({
    sms_campaign_id: "sms_campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionSendSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">getContent</a>({ ...params }) -> Mailchimp.SmsCampaignContent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the content for an SMS campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.getContent({
    sms_campaign_id: "sms_campaign_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetContentSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsCampaigns.<a href="/src/api/resources/smsCampaigns/client/Client.ts">upsertContent</a>({ ...params }) -> Mailchimp.SmsCampaignContent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Set the content for an SMS campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsCampaigns.upsertContent({
    sms_campaign_id: "sms_campaign_id",
    message_body: "message_body"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpsertContentSmsCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SmsCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SearchMembers
<details><summary><code>client.searchMembers.<a href="/src/api/resources/searchMembers/client/Client.ts">list</a>({ ...params }) -> Mailchimp.ListSearchMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchMembers.list({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListSearchMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TemplateFolders
<details><summary><code>client.templateFolders.<a href="/src/api/resources/templateFolders/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.ListTemplateFoldersResponse.Folders.Item, Mailchimp.ListTemplateFoldersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all folders used to organize templates.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.templateFolders.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.templateFolders.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListTemplateFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplateFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templateFolders.<a href="/src/api/resources/templateFolders/client/Client.ts">create</a>({ ...params }) -> Mailchimp.CreateTemplateFoldersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new template folder.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templateFolders.create({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateTemplateFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplateFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templateFolders.<a href="/src/api/resources/templateFolders/client/Client.ts">get</a>({ ...params }) -> Mailchimp.GetTemplateFoldersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific folder used to organize templates.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templateFolders.get({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetTemplateFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplateFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templateFolders.<a href="/src/api/resources/templateFolders/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templateFolders.delete({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteTemplateFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplateFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templateFolders.<a href="/src/api/resources/templateFolders/client/Client.ts">update</a>({ ...params }) -> Mailchimp.UpdateTemplateFoldersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific folder used to organize templates.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templateFolders.update({
    folder_id: "folder_id",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateTemplateFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplateFoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## templates
<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Mailchimp.TemplateInstance, Mailchimp.ListTemplatesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of an account's available templates.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.templates.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.templates.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListTemplatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">create</a>({ ...params }) -> Mailchimp.TemplateInstance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new template for the account. Only Classic templates are supported.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.create({
    html: "html",
    name: "Freddie's Jokes"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateTemplatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">get</a>({ ...params }) -> Mailchimp.TemplateInstance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific template.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.get({
    template_id: "template_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetTemplatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific template.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.delete({
    template_id: "template_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteTemplatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">update</a>({ ...params }) -> Mailchimp.TemplateInstance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the name, HTML, or `folder_id` of an existing template.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.update({
    template_id: "template_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.UpdateTemplatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">listDefaultContent</a>({ ...params }) -> Mailchimp.ListDefaultContentTemplatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the sections that you can edit in a template, including each section's default content.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.listDefaultContent({
    template_id: "template_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.ListDefaultContentTemplatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## VerifiedDomains
<details><summary><code>client.verifiedDomains.<a href="/src/api/resources/verifiedDomains/client/Client.ts">list</a>() -> Mailchimp.ListVerifiedDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all of the sending domains on the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiedDomains.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `VerifiedDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.verifiedDomains.<a href="/src/api/resources/verifiedDomains/client/Client.ts">create</a>({ ...params }) -> Mailchimp.CreateVerifiedDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a domain to the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiedDomains.create({
    verification_email: "verification_email"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateVerifiedDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiedDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.verifiedDomains.<a href="/src/api/resources/verifiedDomains/client/Client.ts">get</a>({ ...params }) -> Mailchimp.GetVerifiedDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the details for a single domain on the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiedDomains.get({
    domain_name: "domain_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.GetVerifiedDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiedDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.verifiedDomains.<a href="/src/api/resources/verifiedDomains/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a verified domain from the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiedDomains.delete({
    domain_name: "domain_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.DeleteVerifiedDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiedDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.verifiedDomains.<a href="/src/api/resources/verifiedDomains/client/Client.ts">createActionVerify</a>({ ...params }) -> Mailchimp.CreateActionVerifyVerifiedDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verify a domain for sending.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiedDomains.createActionVerify({
    domain_name: "domain_name",
    code: "code"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mailchimp.CreateActionVerifyVerifiedDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiedDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>


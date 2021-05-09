// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Insert the build code in here
  let railsDocsActionMailer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer.html'));
  })
  context.subscriptions.push(railsDocsActionMailer);
  let railsDocsActiveSupport = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupport', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport.html'));
  })
  context.subscriptions.push(railsDocsActiveSupport);
  let railsDocsActiveSupportCachingKeyGenerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCachingKeyGenerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/CachingKeyGenerator.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCachingKeyGenerator);
  let railsDocsActiveSupportConcern = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConcern', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Concern.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConcern);
  let railsDocsActiveSupportLogSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLogSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/LogSubscriber.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLogSubscriber);
  let railsDocsActiveSupportXmlMini_LibXMLSAX = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXmlMini_LibXMLSAX', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XmlMini_LibXMLSAX.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXmlMini_LibXMLSAX);
  let railsDocsActiveSupportXmlMini_NokogiriSAX = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXmlMini_NokogiriSAX', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XmlMini_NokogiriSAX.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXmlMini_NokogiriSAX);
  let railsDocsActiveSupportConfigurationFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConfigurationFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ConfigurationFile.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConfigurationFile);
  let railsDocsActiveSupportConfigurationFileFormatError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConfigurationFileFormatError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ConfigurationFile/FormatError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConfigurationFileFormatError);
  let railsDocsActiveSupportKeyGenerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportKeyGenerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/KeyGenerator.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportKeyGenerator);
  let railsDocsActiveSupportExecutionWrapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportExecutionWrapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ExecutionWrapper.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportExecutionWrapper);
  let railsDocsActiveSupportCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacks);
  let railsDocsActiveSupportDuration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDuration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Duration.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDuration);
  let railsDocsActiveSupportMessages = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessages', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Messages.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessages);
  let railsDocsActiveSupportMessagesRotator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessagesRotator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Messages/Rotator.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessagesRotator);
  let railsDocsActiveSupportMessagesRotatorVerifier = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessagesRotatorVerifier', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Messages/Rotator/Verifier.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessagesRotatorVerifier);
  let railsDocsActiveSupportMessagesRotatorEncryptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessagesRotatorEncryptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Messages/Rotator/Encryptor.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessagesRotatorEncryptor);
  let railsDocsActiveSupportMessagesRotator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessagesRotator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Messages/Rotator.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessagesRotator);
  let railsDocsActiveSupportLogger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLogger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Logger.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLogger);
  let railsDocsActiveSupportLoggerSimpleFormatter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLoggerSimpleFormatter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Logger/SimpleFormatter.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLoggerSimpleFormatter);
  let railsDocsActiveSupportSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Subscriber.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportSubscriber);
  let railsDocsActiveSupportCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCache);
  let railsDocsActiveSupportCacheMemoryStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemoryStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemoryStore.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemoryStore);
  let railsDocsActiveSupportCacheCoders = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheCoders', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Coders.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheCoders);
  let railsDocsActiveSupportCacheCodersRails70Coder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheCodersRails70Coder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Coders/Rails70Coder.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheCodersRails70Coder);
  let railsDocsActiveSupportCacheCodersLoader = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheCodersLoader', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Coders/Loader.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheCodersLoader);
  let railsDocsActiveSupportCacheCodersRails61Coder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheCodersRails61Coder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Coders/Rails61Coder.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheCodersRails61Coder);
  let railsDocsActiveSupportCacheStrategy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheStrategy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Strategy.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheStrategy);
  let railsDocsActiveSupportCacheConnectionPoolLike = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheConnectionPoolLike', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/ConnectionPoolLike.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheConnectionPoolLike);
  let railsDocsActiveSupportCacheMemCacheStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemCacheStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemCacheStore.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemCacheStore);
  let railsDocsActiveSupportCacheCoders = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheCoders', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Coders.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheCoders);
  let railsDocsActiveSupportCacheMemCacheStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemCacheStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemCacheStore.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemCacheStore);
  let railsDocsActiveSupportCacheMemCacheStoreCoders = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemCacheStoreCoders', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemCacheStore/Coders.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemCacheStoreCoders);
  let railsDocsActiveSupportCacheMemCacheStoreCodersRails70Coder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemCacheStoreCodersRails70Coder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemCacheStore/Coders/Rails70Coder.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemCacheStoreCodersRails70Coder);
  let railsDocsActiveSupportCacheMemCacheStoreCodersLoader = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemCacheStoreCodersLoader', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemCacheStore/Coders/Loader.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemCacheStoreCodersLoader);
  let railsDocsActiveSupportCacheMemCacheStoreCodersRails61Coder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemCacheStoreCodersRails61Coder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemCacheStore/Coders/Rails61Coder.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemCacheStoreCodersRails61Coder);
  let railsDocsActiveSupportCacheMemCacheStoreCoders = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheMemCacheStoreCoders', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/MemCacheStore/Coders.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheMemCacheStoreCoders);
  let railsDocsActiveSupportCacheNullStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheNullStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/NullStore.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheNullStore);
  let railsDocsActiveSupportCacheStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Store.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheStore);
  let railsDocsActiveSupportCacheRedisCacheStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheRedisCacheStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/RedisCacheStore.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheRedisCacheStore);
  let railsDocsActiveSupportCacheStrategy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheStrategy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Strategy.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheStrategy);
  let railsDocsActiveSupportCacheStrategyLocalCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheStrategyLocalCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Strategy/LocalCache.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheStrategyLocalCache);
  let railsDocsActiveSupportCacheStrategyLocalCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheStrategyLocalCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Strategy/LocalCache.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheStrategyLocalCache);
  let railsDocsActiveSupportCacheStrategyLocalCacheLocalStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheStrategyLocalCacheLocalStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/Strategy/LocalCache/LocalStore.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheStrategyLocalCacheLocalStore);
  let railsDocsActiveSupportCacheFileStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCacheFileStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache/FileStore.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCacheFileStore);
  let railsDocsActiveSupportNumericWithFormat = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNumericWithFormat', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/NumericWithFormat.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNumericWithFormat);
  let railsDocsActiveSupportForkTracker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportForkTracker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ForkTracker.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportForkTracker);
  let railsDocsActiveSupportRangeWithFormat = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportRangeWithFormat', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/RangeWithFormat.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportRangeWithFormat);
  let railsDocsActiveSupportGzip = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportGzip', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Gzip.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportGzip);
  let railsDocsActiveSupportXMLConverter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXMLConverter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XMLConverter.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXMLConverter);
  let railsDocsActiveSupportParameterFilter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportParameterFilter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ParameterFilter.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportParameterFilter);
  let railsDocsActiveSupportSafeBuffer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportSafeBuffer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/SafeBuffer.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportSafeBuffer);
  let railsDocsActiveSupportCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacks);
  let railsDocsActiveSupportCallbacksFilters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksFilters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/Filters.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksFilters);
  let railsDocsActiveSupportCallbacksFiltersAfter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksFiltersAfter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/Filters/After.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksFiltersAfter);
  let railsDocsActiveSupportCallbacksFiltersBefore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksFiltersBefore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/Filters/Before.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksFiltersBefore);
  let railsDocsActiveSupportCallbacksConditionals = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksConditionals', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/Conditionals.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksConditionals);
  let railsDocsActiveSupportCallbacksConditionalsValue = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksConditionalsValue', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/Conditionals/Value.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksConditionalsValue);
  let railsDocsActiveSupportCallbacksFilters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksFilters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/Filters.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksFilters);
  let railsDocsActiveSupportCallbacksConditionals = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksConditionals', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/Conditionals.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksConditionals);
  let railsDocsActiveSupportCallbacksClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCallbacksClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Callbacks/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCallbacksClassMethods);
  let railsDocsActiveSupportJSON = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportJSON', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/JSON.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportJSON);
  let railsDocsActiveSupportEventedFileUpdateChecker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEventedFileUpdateChecker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EventedFileUpdateChecker.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEventedFileUpdateChecker);
  let railsDocsActiveSupportEventedFileUpdateCheckerCore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEventedFileUpdateCheckerCore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EventedFileUpdateChecker/Core.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEventedFileUpdateCheckerCore);
  let railsDocsActiveSupportDeprecation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecation);
  let railsDocsActiveSupportNotifications = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotifications', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotifications);
  let railsDocsActiveSupportConfigurationFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConfigurationFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ConfigurationFile.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConfigurationFile);
  let railsDocsActiveSupportLogger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLogger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Logger.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLogger);
  let railsDocsActiveSupportSafeBuffer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportSafeBuffer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/SafeBuffer.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportSafeBuffer);
  let railsDocsActiveSupportSafeBufferSafeConcatError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportSafeBufferSafeConcatError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/SafeBuffer/SafeConcatError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportSafeBufferSafeConcatError);
  let railsDocsActiveSupportLogSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLogSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/LogSubscriber.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLogSubscriber);
  let railsDocsActiveSupportLogSubscriberTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLogSubscriberTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/LogSubscriber/TestHelper.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLogSubscriberTestHelper);
  let railsDocsActiveSupportLogSubscriberTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLogSubscriberTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/LogSubscriber/TestHelper.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLogSubscriberTestHelper);
  let railsDocsActiveSupportLogSubscriberTestHelperMockLogger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLogSubscriberTestHelperMockLogger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/LogSubscriber/TestHelper/MockLogger.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLogSubscriberTestHelperMockLogger);
  let railsDocsActiveSupportConfigurable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConfigurable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Configurable.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConfigurable);
  let railsDocsActiveSupportRescuable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportRescuable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Rescuable.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportRescuable);
  let railsDocsActiveSupportRescuableClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportRescuableClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Rescuable/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportRescuableClassMethods);
  let railsDocsActiveSupportCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Cache.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCache);
  let railsDocsActiveSupportCompareWithRange = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCompareWithRange', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/CompareWithRange.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCompareWithRange);
  let railsDocsActiveSupportInflector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportInflector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Inflector.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportInflector);
  let railsDocsActiveSupportInflectorInflections = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportInflectorInflections', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Inflector/Inflections.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportInflectorInflections);
  let railsDocsActiveSupportInflectorInflections = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportInflectorInflections', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Inflector/Inflections.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportInflectorInflections);
  let railsDocsActiveSupportInflectorInflectionsUncountables = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportInflectorInflectionsUncountables', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Inflector/Inflections/Uncountables.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportInflectorInflectionsUncountables);
  let railsDocsActiveSupportDependencies = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependencies', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependencies);
  let railsDocsActiveSupportDependenciesWatchStack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesWatchStack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/WatchStack.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesWatchStack);
  let railsDocsActiveSupportDependenciesLoadable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesLoadable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/Loadable.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesLoadable);
  let railsDocsActiveSupportDependenciesZeitwerkIntegration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesZeitwerkIntegration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/ZeitwerkIntegration.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesZeitwerkIntegration);
  let railsDocsActiveSupportDependenciesInterlock = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesInterlock', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/Interlock.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesInterlock);
  let railsDocsActiveSupportDependenciesZeitwerkIntegration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesZeitwerkIntegration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/ZeitwerkIntegration.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesZeitwerkIntegration);
  let railsDocsActiveSupportDependenciesZeitwerkIntegrationRequireDependency = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesZeitwerkIntegrationRequireDependency', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/ZeitwerkIntegration/RequireDependency.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesZeitwerkIntegrationRequireDependency);
  let railsDocsActiveSupportDependenciesZeitwerkIntegrationDecorations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesZeitwerkIntegrationDecorations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/ZeitwerkIntegration/Decorations.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesZeitwerkIntegrationDecorations);
  let railsDocsActiveSupportDependenciesZeitwerkIntegrationInflector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependenciesZeitwerkIntegrationInflector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies/ZeitwerkIntegration/Inflector.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependenciesZeitwerkIntegrationInflector);
  let railsDocsActiveSupportForkTracker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportForkTracker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ForkTracker.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportForkTracker);
  let railsDocsActiveSupportForkTrackerCoreExt = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportForkTrackerCoreExt', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ForkTracker/CoreExt.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportForkTrackerCoreExt);
  let railsDocsActiveSupportForkTrackerCoreExtPrivate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportForkTrackerCoreExtPrivate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ForkTracker/CoreExtPrivate.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportForkTrackerCoreExtPrivate);
  let railsDocsActiveSupportTimeZone = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTimeZone', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTimeZone);
  let railsDocsActiveSupportInheritableOptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportInheritableOptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/InheritableOptions.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportInheritableOptions);
  let railsDocsActiveSupportGzip = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportGzip', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Gzip.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportGzip);
  let railsDocsActiveSupportGzipStream = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportGzipStream', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Gzip/Stream.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportGzipStream);
  let railsDocsActiveSupportSecurityUtils = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportSecurityUtils', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/SecurityUtils.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportSecurityUtils);
  let railsDocsActiveSupportLoggerSilence = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLoggerSilence', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/LoggerSilence.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLoggerSilence);
  let railsDocsActiveSupportActionableError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportActionableError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ActionableError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportActionableError);
  let railsDocsActiveSupportActionableErrorNonActionable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportActionableErrorNonActionable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ActionableError/NonActionable.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportActionableErrorNonActionable);
  let railsDocsActiveSupportActionableErrorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportActionableErrorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ActionableError/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportActionableErrorClassMethods);
  let railsDocsActiveSupportEncryptedFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEncryptedFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EncryptedFile.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEncryptedFile);
  let railsDocsActiveSupportXmlMini_LibXMLSAX = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXmlMini_LibXMLSAX', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XmlMini_LibXMLSAX.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXmlMini_LibXMLSAX);
  let railsDocsActiveSupportXmlMini_LibXMLSAXHashBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXmlMini_LibXMLSAXHashBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XmlMini_LibXMLSAX/HashBuilder.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXmlMini_LibXMLSAXHashBuilder);
  let railsDocsActiveSupportStringInquirer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportStringInquirer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/StringInquirer.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportStringInquirer);
  let railsDocsActiveSupportXMLConverter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXMLConverter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XMLConverter.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXMLConverter);
  let railsDocsActiveSupportXMLConverterDisallowedType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXMLConverterDisallowedType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XMLConverter/DisallowedType.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXMLConverterDisallowedType);
  let railsDocsActiveSupportConfigurable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConfigurable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Configurable.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConfigurable);
  let railsDocsActiveSupportConfigurableConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConfigurableConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Configurable/Configuration.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConfigurableConfiguration);
  let railsDocsActiveSupportConfigurableClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConfigurableClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Configurable/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConfigurableClassMethods);
  let railsDocsActiveSupportArrayInquirer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportArrayInquirer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ArrayInquirer.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportArrayInquirer);
  let railsDocsActiveSupportMessageVerifier = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessageVerifier', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/MessageVerifier.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessageVerifier);
  let railsDocsActiveSupportMessageVerifierInvalidSignature = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessageVerifierInvalidSignature', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/MessageVerifier/InvalidSignature.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessageVerifierInvalidSignature);
  let railsDocsActiveSupportDescendantsTracker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDescendantsTracker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/DescendantsTracker.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDescendantsTracker);
  let railsDocsActiveSupportFileUpdateChecker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportFileUpdateChecker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/FileUpdateChecker.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportFileUpdateChecker);
  let railsDocsActiveSupportEncryptedConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEncryptedConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EncryptedConfiguration.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEncryptedConfiguration);
  let railsDocsActiveSupportTesting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTesting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTesting);
  let railsDocsActiveSupportTestingAssertions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingAssertions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Assertions.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingAssertions);
  let railsDocsActiveSupportTestingSetupAndTeardown = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingSetupAndTeardown', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/SetupAndTeardown.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingSetupAndTeardown);
  let railsDocsActiveSupportTestingSetupAndTeardownClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingSetupAndTeardownClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/SetupAndTeardown/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingSetupAndTeardownClassMethods);
  let railsDocsActiveSupportTestingTimeHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingTimeHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/TimeHelpers.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingTimeHelpers);
  let railsDocsActiveSupportTestingIsolation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingIsolation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Isolation.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingIsolation);
  let railsDocsActiveSupportTestingFileFixtures = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingFileFixtures', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/FileFixtures.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingFileFixtures);
  let railsDocsActiveSupportTestingParallelization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingParallelization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Parallelization.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingParallelization);
  let railsDocsActiveSupportTestingIsolation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingIsolation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Isolation.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingIsolation);
  let railsDocsActiveSupportTestingIsolationForking = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingIsolationForking', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Isolation/Forking.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingIsolationForking);
  let railsDocsActiveSupportTestingIsolationSubprocess = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingIsolationSubprocess', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Isolation/Subprocess.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingIsolationSubprocess);
  let railsDocsActiveSupportTestingSetupAndTeardown = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingSetupAndTeardown', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/SetupAndTeardown.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingSetupAndTeardown);
  let railsDocsActiveSupportTestingParallelization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingParallelization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Parallelization.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingParallelization);
  let railsDocsActiveSupportTestingParallelizationWorker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingParallelizationWorker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Parallelization/Worker.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingParallelizationWorker);
  let railsDocsActiveSupportTestingParallelizationServer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingParallelizationServer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Parallelization/Server.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingParallelizationServer);
  let railsDocsActiveSupportTestingConstantLookup = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingConstantLookup', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/ConstantLookup.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingConstantLookup);
  let railsDocsActiveSupportTestingDeclarative = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestingDeclarative', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing/Declarative.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestingDeclarative);
  let railsDocsActiveSupportRescuable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportRescuable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Rescuable.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportRescuable);
  let railsDocsActiveSupportConcurrency = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConcurrency', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Concurrency.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConcurrency);
  let railsDocsActiveSupportConcurrencyLoadInterlockAwareMonitor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConcurrencyLoadInterlockAwareMonitor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Concurrency/LoadInterlockAwareMonitor.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConcurrencyLoadInterlockAwareMonitor);
  let railsDocsActiveSupportConcurrencyShareLock = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConcurrencyShareLock', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Concurrency/ShareLock.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConcurrencyShareLock);
  let railsDocsActiveSupportPerThreadRegistry = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportPerThreadRegistry', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/PerThreadRegistry.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportPerThreadRegistry);
  let railsDocsActiveSupportDeprecationException = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationException', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/DeprecationException.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationException);
  let railsDocsActiveSupportCurrentAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportCurrentAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/CurrentAttributes.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportCurrentAttributes);
  let railsDocsActiveSupportXmlMini = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXmlMini', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XmlMini.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXmlMini);
  let railsDocsActiveSupportMessageVerifier = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessageVerifier', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/MessageVerifier.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessageVerifier);
  let railsDocsActiveSupportSecureCompareRotator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportSecureCompareRotator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/SecureCompareRotator.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportSecureCompareRotator);
  let railsDocsActiveSupportMessages = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessages', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Messages.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessages);
  let railsDocsActiveSupportTimeWithZone = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTimeWithZone', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/TimeWithZone.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTimeWithZone);
  let railsDocsActiveSupportEventedFileUpdateChecker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEventedFileUpdateChecker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EventedFileUpdateChecker.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEventedFileUpdateChecker);
  let railsDocsActiveSupportTaggedLogging = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTaggedLogging', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/TaggedLogging.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTaggedLogging);
  let railsDocsActiveSupportDeprecation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecation);
  let railsDocsActiveSupportDeprecationDisallowed = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationDisallowed', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/Disallowed.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationDisallowed);
  let railsDocsActiveSupportDeprecationDeprecatedInstanceVariableProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationDeprecatedInstanceVariableProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/DeprecatedInstanceVariableProxy.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationDeprecatedInstanceVariableProxy);
  let railsDocsActiveSupportDeprecationReporting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationReporting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/Reporting.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationReporting);
  let railsDocsActiveSupportDeprecationMethodWrapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationMethodWrapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/MethodWrapper.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationMethodWrapper);
  let railsDocsActiveSupportDeprecationDeprecatedConstantAccessor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationDeprecatedConstantAccessor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/DeprecatedConstantAccessor.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationDeprecatedConstantAccessor);
  let railsDocsActiveSupportDeprecationDeprecatedConstantProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationDeprecatedConstantProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/DeprecatedConstantProxy.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationDeprecatedConstantProxy);
  let railsDocsActiveSupportDeprecationDeprecatedObjectProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationDeprecatedObjectProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/DeprecatedObjectProxy.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationDeprecatedObjectProxy);
  let railsDocsActiveSupportDeprecationBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDeprecationBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Deprecation/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDeprecationBehavior);
  let railsDocsActiveSupportActionableError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportActionableError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ActionableError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportActionableError);
  let railsDocsActiveSupportLazyLoadHooks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportLazyLoadHooks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/LazyLoadHooks.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportLazyLoadHooks);
  let railsDocsActiveSupportReloader = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportReloader', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Reloader.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportReloader);
  let railsDocsActiveSupportMessageEncryptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessageEncryptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/MessageEncryptor.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessageEncryptor);
  let railsDocsActiveSupportMessageEncryptorInvalidMessage = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessageEncryptorInvalidMessage', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/MessageEncryptor/InvalidMessage.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessageEncryptorInvalidMessage);
  let railsDocsActiveSupportExecutor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportExecutor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Executor.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportExecutor);
  let railsDocsActiveSupportConcurrency = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportConcurrency', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Concurrency.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportConcurrency);
  let railsDocsActiveSupportBacktraceCleaner = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportBacktraceCleaner', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/BacktraceCleaner.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportBacktraceCleaner);
  let railsDocsActiveSupportMultibyte = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMultibyte', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Multibyte.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMultibyte);
  let railsDocsActiveSupportMultibyte = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMultibyte', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Multibyte.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMultibyte);
  let railsDocsActiveSupportMultibyteUnicode = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMultibyteUnicode', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Multibyte/Unicode.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMultibyteUnicode);
  let railsDocsActiveSupportMultibyteChars = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMultibyteChars', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Multibyte/Chars.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMultibyteChars);
  let railsDocsActiveSupportXmlMini_NokogiriSAX = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXmlMini_NokogiriSAX', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XmlMini_NokogiriSAX.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXmlMini_NokogiriSAX);
  let railsDocsActiveSupportXmlMini_NokogiriSAXHashBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportXmlMini_NokogiriSAXHashBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/XmlMini_NokogiriSAX/HashBuilder.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportXmlMini_NokogiriSAXHashBuilder);
  let railsDocsActiveSupportAutoload = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportAutoload', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Autoload.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportAutoload);
  let railsDocsActiveSupportTesting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTesting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Testing.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTesting);
  let railsDocsActiveSupportBenchmarkable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportBenchmarkable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Benchmarkable.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportBenchmarkable);
  let railsDocsActiveSupportProxyObject = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportProxyObject', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/ProxyObject.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportProxyObject);
  let railsDocsActiveSupportOrderedOptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportOrderedOptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/OrderedOptions.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportOrderedOptions);
  let railsDocsActiveSupportDuration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDuration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Duration.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDuration);
  let railsDocsActiveSupportDurationISO8601Parser = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDurationISO8601Parser', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Duration/ISO8601Parser.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDurationISO8601Parser);
  let railsDocsActiveSupportDurationISO8601ParserParsingError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDurationISO8601ParserParsingError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Duration/ISO8601Parser/ParsingError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDurationISO8601ParserParsingError);
  let railsDocsActiveSupportDurationISO8601Parser = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDurationISO8601Parser', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Duration/ISO8601Parser.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDurationISO8601Parser);
  let railsDocsActiveSupportHashWithIndifferentAccess = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportHashWithIndifferentAccess', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/HashWithIndifferentAccess.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportHashWithIndifferentAccess);
  let railsDocsActiveSupportVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportVERSION);
  let railsDocsActiveSupportTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportTestCase);
  let railsDocsActiveSupportMessageEncryptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportMessageEncryptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/MessageEncryptor.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportMessageEncryptor);
  let railsDocsActiveSupportNotifications = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotifications', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotifications);
  let railsDocsActiveSupportNotificationsInstrumenter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotificationsInstrumenter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications/Instrumenter.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotificationsInstrumenter);
  let railsDocsActiveSupportNotificationsFanout = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotificationsFanout', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications/Fanout.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotificationsFanout);
  let railsDocsActiveSupportNotificationsFanout = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotificationsFanout', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications/Fanout.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotificationsFanout);
  let railsDocsActiveSupportNotificationsFanoutSubscribers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotificationsFanoutSubscribers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications/Fanout/Subscribers.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotificationsFanoutSubscribers);
  let railsDocsActiveSupportNotificationsFanoutSubscribersEventObject = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotificationsFanoutSubscribersEventObject', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications/Fanout/Subscribers/EventObject.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotificationsFanoutSubscribersEventObject);
  let railsDocsActiveSupportNotificationsFanoutSubscribers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotificationsFanoutSubscribers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications/Fanout/Subscribers.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotificationsFanoutSubscribers);
  let railsDocsActiveSupportNotificationsEvent = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNotificationsEvent', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Notifications/Event.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNotificationsEvent);
  let railsDocsActiveSupportDependencies = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportDependencies', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Dependencies.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportDependencies);
  let railsDocsActiveSupportInflector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportInflector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/Inflector.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportInflector);
  let railsDocsActiveSupportEncryptedFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEncryptedFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EncryptedFile.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEncryptedFile);
  let railsDocsActiveSupportEncryptedFileMissingKeyError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEncryptedFileMissingKeyError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EncryptedFile/MissingKeyError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEncryptedFileMissingKeyError);
  let railsDocsActiveSupportEncryptedFileMissingContentError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEncryptedFileMissingContentError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EncryptedFile/MissingContentError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEncryptedFileMissingContentError);
  let railsDocsActiveSupportEncryptedFileInvalidKeyLengthError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportEncryptedFileInvalidKeyLengthError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/EncryptedFile/InvalidKeyLengthError.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportEncryptedFileInvalidKeyLengthError);
  let railsDocsActiveSupportNumberHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupportNumberHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport/NumberHelper.html'));
  })
  context.subscriptions.push(railsDocsActiveSupportNumberHelper);
  let railsDocsDateAndTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDateAndTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/DateAndTime.html'));
  })
  context.subscriptions.push(railsDocsDateAndTime);
  let railsDocsRails = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRails', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails.html'));
  })
  context.subscriptions.push(railsDocsRails);
  let railsDocsActiveModel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel.html'));
  })
  context.subscriptions.push(railsDocsActiveModel);
  let railsDocsActiveModelConversion = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelConversion', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Conversion.html'));
  })
  context.subscriptions.push(railsDocsActiveModelConversion);
  let railsDocsActiveModelMissingAttributeError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelMissingAttributeError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/MissingAttributeError.html'));
  })
  context.subscriptions.push(railsDocsActiveModelMissingAttributeError);
  let railsDocsActiveModelSerializers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSerializers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Serializers.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSerializers);
  let railsDocsActiveModelAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Attributes.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributes);
  let railsDocsActiveModelSerialization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSerialization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Serialization.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSerialization);
  let railsDocsActiveModelStrictValidationFailed = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelStrictValidationFailed', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/StrictValidationFailed.html'));
  })
  context.subscriptions.push(railsDocsActiveModelStrictValidationFailed);
  let railsDocsActiveModelDirty = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelDirty', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Dirty.html'));
  })
  context.subscriptions.push(railsDocsActiveModelDirty);
  let railsDocsActiveModelLint = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelLint', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Lint.html'));
  })
  context.subscriptions.push(railsDocsActiveModelLint);
  let railsDocsActiveModelLintTests = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelLintTests', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Lint/Tests.html'));
  })
  context.subscriptions.push(railsDocsActiveModelLintTests);
  let railsDocsActiveModelCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveModelCallbacks);
  let railsDocsActiveModelType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type.html'));
  })
  context.subscriptions.push(railsDocsActiveModelType);
  let railsDocsActiveModelSecurePassword = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSecurePassword', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/SecurePassword.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSecurePassword);
  let railsDocsActiveModelSecurePasswordClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSecurePasswordClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSecurePasswordClassMethods);
  let railsDocsActiveModelSecurePasswordInstanceMethodsOnActivation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSecurePasswordInstanceMethodsOnActivation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/InstanceMethodsOnActivation.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSecurePasswordInstanceMethodsOnActivation);
  let railsDocsActiveModelAttributeAssignment = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributeAssignment', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/AttributeAssignment.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributeAssignment);
  let railsDocsActiveModelRangeError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelRangeError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/RangeError.html'));
  })
  context.subscriptions.push(railsDocsActiveModelRangeError);
  let railsDocsActiveModelValidator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validator.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidator);
  let railsDocsActiveModelTranslation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTranslation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Translation.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTranslation);
  let railsDocsActiveModelDeprecationHandlingDetailsHash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelDeprecationHandlingDetailsHash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/DeprecationHandlingDetailsHash.html'));
  })
  context.subscriptions.push(railsDocsActiveModelDeprecationHandlingDetailsHash);
  let railsDocsActiveModelAttributeMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributeMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/AttributeMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributeMethods);
  let railsDocsActiveModelAttributeMethodsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributeMethodsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/AttributeMethods/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributeMethodsClassMethods);
  let railsDocsActiveModelAttributeMethodsClassMethodsCodeGenerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributeMethodsClassMethodsCodeGenerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/AttributeMethods/ClassMethods/CodeGenerator.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributeMethodsClassMethodsCodeGenerator);
  let railsDocsActiveModelAttributeMethodsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributeMethodsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/AttributeMethods/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributeMethodsClassMethods);
  let railsDocsActiveModelLint = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelLint', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Lint.html'));
  })
  context.subscriptions.push(railsDocsActiveModelLint);
  let railsDocsActiveModelValidations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidations);
  let railsDocsActiveModelDeprecationHandlingMessageHash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelDeprecationHandlingMessageHash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/DeprecationHandlingMessageHash.html'));
  })
  context.subscriptions.push(railsDocsActiveModelDeprecationHandlingMessageHash);
  let railsDocsActiveModelValidations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidations);
  let railsDocsActiveModelValidationsCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsCallbacks);
  let railsDocsActiveModelValidationsCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsCallbacks);
  let railsDocsActiveModelValidationsCallbacksClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsCallbacksClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/Callbacks/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsCallbacksClassMethods);
  let railsDocsActiveModelValidationsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsClassMethods);
  let railsDocsActiveModelValidationsAcceptanceValidator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsAcceptanceValidator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/AcceptanceValidator.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsAcceptanceValidator);
  let railsDocsActiveModelValidationsAcceptanceValidator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsAcceptanceValidator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/AcceptanceValidator.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsAcceptanceValidator);
  let railsDocsActiveModelValidationsAcceptanceValidatorLazilyDefineAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsAcceptanceValidatorLazilyDefineAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/AcceptanceValidator/LazilyDefineAttributes.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsAcceptanceValidatorLazilyDefineAttributes);
  let railsDocsActiveModelValidationsHelperMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationsHelperMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Validations/HelperMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationsHelperMethods);
  let railsDocsActiveModelAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Attributes.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributes);
  let railsDocsActiveModelAttributesClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributesClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Attributes/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributesClassMethods);
  let railsDocsActiveModelSerializers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSerializers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Serializers.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSerializers);
  let railsDocsActiveModelSerializersJSON = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSerializersJSON', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Serializers/JSON.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSerializersJSON);
  let railsDocsActiveModelDeprecationHandlingMessageArray = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelDeprecationHandlingMessageArray', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/DeprecationHandlingMessageArray.html'));
  })
  context.subscriptions.push(railsDocsActiveModelDeprecationHandlingMessageArray);
  let railsDocsActiveModelType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type.html'));
  })
  context.subscriptions.push(railsDocsActiveModelType);
  let railsDocsActiveModelTypeInteger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeInteger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Integer.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeInteger);
  let railsDocsActiveModelTypeBigInteger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeBigInteger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/BigInteger.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeBigInteger);
  let railsDocsActiveModelTypeBinary = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeBinary', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Binary.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeBinary);
  let railsDocsActiveModelTypeHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpers);
  let railsDocsActiveModelTypeDecimal = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeDecimal', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Decimal.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeDecimal);
  let railsDocsActiveModelTypeFloat = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeFloat', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Float.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeFloat);
  let railsDocsActiveModelTypeString = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeString', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/String.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeString);
  let railsDocsActiveModelTypeImmutableString = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeImmutableString', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/ImmutableString.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeImmutableString);
  let railsDocsActiveModelTypeValue = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeValue', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Value.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeValue);
  let railsDocsActiveModelTypeBoolean = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeBoolean', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Boolean.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeBoolean);
  let railsDocsActiveModelTypeHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpers);
  let railsDocsActiveModelTypeHelpersNumeric = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpersNumeric', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers/Numeric.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpersNumeric);
  let railsDocsActiveModelTypeHelpersAcceptsMultiparameterTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpersAcceptsMultiparameterTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers/AcceptsMultiparameterTime.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpersAcceptsMultiparameterTime);
  let railsDocsActiveModelTypeHelpersAcceptsMultiparameterTimeInstanceMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpersAcceptsMultiparameterTimeInstanceMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers/AcceptsMultiparameterTime/InstanceMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpersAcceptsMultiparameterTimeInstanceMethods);
  let railsDocsActiveModelTypeHelpersMutable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpersMutable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers/Mutable.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpersMutable);
  let railsDocsActiveModelTypeHelpersTimeValue = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpersTimeValue', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers/TimeValue.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpersTimeValue);
  let railsDocsActiveModelTypeHelpersTimezone = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpersTimezone', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers/Timezone.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpersTimezone);
  let railsDocsActiveModelTypeHelpersAcceptsMultiparameterTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelTypeHelpersAcceptsMultiparameterTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Type/Helpers/AcceptsMultiparameterTime.html'));
  })
  context.subscriptions.push(railsDocsActiveModelTypeHelpersAcceptsMultiparameterTime);
  let railsDocsActiveModelNestedError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelNestedError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/NestedError.html'));
  })
  context.subscriptions.push(railsDocsActiveModelNestedError);
  let railsDocsActiveModelSecurePassword = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelSecurePassword', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/SecurePassword.html'));
  })
  context.subscriptions.push(railsDocsActiveModelSecurePassword);
  let railsDocsActiveModelValidationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelValidationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/ValidationError.html'));
  })
  context.subscriptions.push(railsDocsActiveModelValidationError);
  let railsDocsActiveModelName = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelName', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Name.html'));
  })
  context.subscriptions.push(railsDocsActiveModelName);
  let railsDocsActiveModelErrors = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelErrors', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Errors.html'));
  })
  context.subscriptions.push(railsDocsActiveModelErrors);
  let railsDocsActiveModelForbiddenAttributesError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelForbiddenAttributesError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/ForbiddenAttributesError.html'));
  })
  context.subscriptions.push(railsDocsActiveModelForbiddenAttributesError);
  let railsDocsActiveModelError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Error.html'));
  })
  context.subscriptions.push(railsDocsActiveModelError);
  let railsDocsActiveModelVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActiveModelVERSION);
  let railsDocsActiveModelNaming = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelNaming', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Naming.html'));
  })
  context.subscriptions.push(railsDocsActiveModelNaming);
  let railsDocsActiveModelUnknownAttributeError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelUnknownAttributeError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/UnknownAttributeError.html'));
  })
  context.subscriptions.push(railsDocsActiveModelUnknownAttributeError);
  let railsDocsActiveModelModel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelModel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/Model.html'));
  })
  context.subscriptions.push(railsDocsActiveModelModel);
  let railsDocsActiveModelAttributeMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModelAttributeMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel/AttributeMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveModelAttributeMethods);
  let railsDocsDigest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDigest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Digest.html'));
  })
  context.subscriptions.push(railsDocsDigest);
  let railsDocsNumeric = vscode.commands.registerCommand('vscode-rails-docs.railsDocsNumeric', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Numeric.html'));
  })
  context.subscriptions.push(railsDocsNumeric);
  let railsDocsSecureRandom = vscode.commands.registerCommand('vscode-rails-docs.railsDocsSecureRandom', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/SecureRandom.html'));
  })
  context.subscriptions.push(railsDocsSecureRandom);
  let railsDocsInteger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsInteger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Integer.html'));
  })
  context.subscriptions.push(railsDocsInteger);
  let railsDocsMethod = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMethod', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Method.html'));
  })
  context.subscriptions.push(railsDocsMethod);
  let railsDocsAbstractController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController.html'));
  })
  context.subscriptions.push(railsDocsAbstractController);
  let railsDocsEnumerable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsEnumerable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Enumerable.html'));
  })
  context.subscriptions.push(railsDocsEnumerable);
  let railsDocsProcess = vscode.commands.registerCommand('vscode-rails-docs.railsDocsProcess', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Process.html'));
  })
  context.subscriptions.push(railsDocsProcess);
  let railsDocsException = vscode.commands.registerCommand('vscode-rails-docs.railsDocsException', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Exception.html'));
  })
  context.subscriptions.push(railsDocsException);
  let railsDocsActiveJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob.html'));
  })
  context.subscriptions.push(railsDocsActiveJob);
  let railsDocsActiveJobTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/TestHelper.html'));
  })
  context.subscriptions.push(railsDocsActiveJobTestHelper);
  let railsDocsActiveJobSerializers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobSerializers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Serializers.html'));
  })
  context.subscriptions.push(railsDocsActiveJobSerializers);
  let railsDocsActiveJobExecution = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobExecution', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Execution.html'));
  })
  context.subscriptions.push(railsDocsActiveJobExecution);
  let railsDocsActiveJobQueuePriority = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueuePriority', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueuePriority.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueuePriority);
  let railsDocsActiveJobQueuePriorityClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueuePriorityClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueuePriority/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueuePriorityClassMethods);
  let railsDocsActiveJobCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveJobCallbacks);
  let railsDocsActiveJobCore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobCore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Core.html'));
  })
  context.subscriptions.push(railsDocsActiveJobCore);
  let railsDocsActiveJobCoreClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobCoreClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Core/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobCoreClassMethods);
  let railsDocsActiveJobBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Base.html'));
  })
  context.subscriptions.push(railsDocsActiveJobBase);
  let railsDocsActiveJobCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveJobCallbacks);
  let railsDocsActiveJobCallbacksClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobCallbacksClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Callbacks/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobCallbacksClassMethods);
  let railsDocsActiveJobEnqueuing = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobEnqueuing', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Enqueuing.html'));
  })
  context.subscriptions.push(railsDocsActiveJobEnqueuing);
  let railsDocsActiveJobEnqueuingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobEnqueuingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Enqueuing/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobEnqueuingClassMethods);
  let railsDocsActiveJobQueueAdapters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdapters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdapters);
  let railsDocsActiveJobQueueAdaptersQueueClassicAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersQueueClassicAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/QueueClassicAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersQueueClassicAdapter);
  let railsDocsActiveJobQueueAdaptersResqueAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersResqueAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/ResqueAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersResqueAdapter);
  let railsDocsActiveJobQueueAdaptersQueAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersQueAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/QueAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersQueAdapter);
  let railsDocsActiveJobQueueAdaptersBackburnerAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersBackburnerAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/BackburnerAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersBackburnerAdapter);
  let railsDocsActiveJobQueueAdaptersSidekiqAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersSidekiqAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/SidekiqAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersSidekiqAdapter);
  let railsDocsActiveJobQueueAdaptersSneakersAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersSneakersAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/SneakersAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersSneakersAdapter);
  let railsDocsActiveJobQueueAdaptersDelayedJobAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersDelayedJobAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/DelayedJobAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersDelayedJobAdapter);
  let railsDocsActiveJobQueueAdaptersInlineAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersInlineAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/InlineAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersInlineAdapter);
  let railsDocsActiveJobQueueAdaptersAsyncAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersAsyncAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/AsyncAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersAsyncAdapter);
  let railsDocsActiveJobQueueAdaptersTestAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersTestAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/TestAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersTestAdapter);
  let railsDocsActiveJobQueueAdaptersSuckerPunchAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdaptersSuckerPunchAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters/SuckerPunchAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdaptersSuckerPunchAdapter);
  let railsDocsActiveJobQueueName = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueName', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueName.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueName);
  let railsDocsActiveJobQueueAdapters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdapters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapters.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdapters);
  let railsDocsActiveJobCore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobCore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Core.html'));
  })
  context.subscriptions.push(railsDocsActiveJobCore);
  let railsDocsActiveJobQueueAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdapter);
  let railsDocsActiveJobQueueAdapterClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdapterClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapter/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdapterClassMethods);
  let railsDocsActiveJobExceptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobExceptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Exceptions.html'));
  })
  context.subscriptions.push(railsDocsActiveJobExceptions);
  let railsDocsActiveJobExceptionsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobExceptionsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Exceptions/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobExceptionsClassMethods);
  let railsDocsActiveJobExceptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobExceptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Exceptions.html'));
  })
  context.subscriptions.push(railsDocsActiveJobExceptions);
  let railsDocsActiveJobSerializationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobSerializationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/SerializationError.html'));
  })
  context.subscriptions.push(railsDocsActiveJobSerializationError);
  let railsDocsActiveJobEnqueuing = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobEnqueuing', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Enqueuing.html'));
  })
  context.subscriptions.push(railsDocsActiveJobEnqueuing);
  let railsDocsActiveJobQueuePriority = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueuePriority', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueuePriority.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueuePriority);
  let railsDocsActiveJobSerializers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobSerializers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Serializers.html'));
  })
  context.subscriptions.push(railsDocsActiveJobSerializers);
  let railsDocsActiveJobSerializersObjectSerializer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobSerializersObjectSerializer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Serializers/ObjectSerializer.html'));
  })
  context.subscriptions.push(railsDocsActiveJobSerializersObjectSerializer);
  let railsDocsActiveJobExecution = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobExecution', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Execution.html'));
  })
  context.subscriptions.push(railsDocsActiveJobExecution);
  let railsDocsActiveJobExecutionClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobExecutionClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Execution/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobExecutionClassMethods);
  let railsDocsActiveJobTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/TestHelper.html'));
  })
  context.subscriptions.push(railsDocsActiveJobTestHelper);
  let railsDocsActiveJobTestHelperTestQueueAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobTestHelperTestQueueAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/TestHelper/TestQueueAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobTestHelperTestQueueAdapter);
  let railsDocsActiveJobTestHelperTestQueueAdapterClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobTestHelperTestQueueAdapterClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/TestHelper/TestQueueAdapter/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobTestHelperTestQueueAdapterClassMethods);
  let railsDocsActiveJobTestHelperTestQueueAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobTestHelperTestQueueAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/TestHelper/TestQueueAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobTestHelperTestQueueAdapter);
  let railsDocsActiveJobEnqueueError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobEnqueueError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/EnqueueError.html'));
  })
  context.subscriptions.push(railsDocsActiveJobEnqueueError);
  let railsDocsActiveJobDeserializationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobDeserializationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/DeserializationError.html'));
  })
  context.subscriptions.push(railsDocsActiveJobDeserializationError);
  let railsDocsActiveJobQueueAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueAdapter);
  let railsDocsActiveJobVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActiveJobVERSION);
  let railsDocsActiveJobTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActiveJobTestCase);
  let railsDocsActiveJobArguments = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobArguments', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Arguments.html'));
  })
  context.subscriptions.push(railsDocsActiveJobArguments);
  let railsDocsActiveJobArguments = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobArguments', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Arguments.html'));
  })
  context.subscriptions.push(railsDocsActiveJobArguments);
  let railsDocsActiveJobArgumentsHash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobArgumentsHash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/Arguments/Hash.html'));
  })
  context.subscriptions.push(railsDocsActiveJobArgumentsHash);
  let railsDocsActiveJobQueueName = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueName', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueName.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueName);
  let railsDocsActiveJobQueueNameClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJobQueueNameClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob/QueueName/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveJobQueueNameClassMethods);
  let railsDocsNameError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsNameError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/NameError.html'));
  })
  context.subscriptions.push(railsDocsNameError);
  let railsDocsModule = vscode.commands.registerCommand('vscode-rails-docs.railsDocsModule', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Module.html'));
  })
  context.subscriptions.push(railsDocsModule);
  let railsDocsMail = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMail', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mail.html'));
  })
  context.subscriptions.push(railsDocsMail);
  let railsDocsMailMessage = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMailMessage', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mail/Message.html'));
  })
  context.subscriptions.push(railsDocsMailMessage);
  let railsDocsMailAddress = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMailAddress', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mail/Address.html'));
  })
  context.subscriptions.push(railsDocsMailAddress);
  let railsDocsActionDispatch = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatch', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch.html'));
  })
  context.subscriptions.push(railsDocsActionDispatch);
  let railsDocsDateAndTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDateAndTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/DateAndTime.html'));
  })
  context.subscriptions.push(railsDocsDateAndTime);
  let railsDocsDateAndTimeZones = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDateAndTimeZones', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/DateAndTime/Zones.html'));
  })
  context.subscriptions.push(railsDocsDateAndTimeZones);
  let railsDocsDateAndTimeCalculations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDateAndTimeCalculations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/DateAndTime/Calculations.html'));
  })
  context.subscriptions.push(railsDocsDateAndTimeCalculations);
  let railsDocsDateAndTimeCompatibility = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDateAndTimeCompatibility', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/DateAndTime/Compatibility.html'));
  })
  context.subscriptions.push(railsDocsDateAndTimeCompatibility);
  let railsDocsModule = vscode.commands.registerCommand('vscode-rails-docs.railsDocsModule', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Module.html'));
  })
  context.subscriptions.push(railsDocsModule);
  let railsDocsModuleConcerning = vscode.commands.registerCommand('vscode-rails-docs.railsDocsModuleConcerning', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Module/Concerning.html'));
  })
  context.subscriptions.push(railsDocsModuleConcerning);
  let railsDocsModuleDelegationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsModuleDelegationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Module/DelegationError.html'));
  })
  context.subscriptions.push(railsDocsModuleDelegationError);
  let railsDocsIO = vscode.commands.registerCommand('vscode-rails-docs.railsDocsIO', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/IO.html'));
  })
  context.subscriptions.push(railsDocsIO);
  let railsDocsDelegator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDelegator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Delegator.html'));
  })
  context.subscriptions.push(railsDocsDelegator);
  let railsDocsDigest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDigest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Digest.html'));
  })
  context.subscriptions.push(railsDocsDigest);
  let railsDocsDigestUUID = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDigestUUID', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Digest/UUID.html'));
  })
  context.subscriptions.push(railsDocsDigestUUID);
  let railsDocsHash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsHash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Hash.html'));
  })
  context.subscriptions.push(railsDocsHash);
  let railsDocsActionCable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable.html'));
  })
  context.subscriptions.push(railsDocsActionCable);
  let railsDocsActionCableTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/TestHelper.html'));
  })
  context.subscriptions.push(railsDocsActionCableTestHelper);
  let railsDocsActionCableRemoteConnections = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableRemoteConnections', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/RemoteConnections.html'));
  })
  context.subscriptions.push(railsDocsActionCableRemoteConnections);
  let railsDocsActionCableHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActionCableHelpers);
  let railsDocsActionCableConnection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnection);
  let railsDocsActionCableConnectionAssertions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionAssertions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Assertions.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionAssertions);
  let railsDocsActionCableConnectionTaggedLoggerProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTaggedLoggerProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TaggedLoggerProxy.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTaggedLoggerProxy);
  let railsDocsActionCableConnectionTestCookieJar = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestCookieJar', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestCookieJar.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestCookieJar);
  let railsDocsActionCableConnectionTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestCase);
  let railsDocsActionCableConnectionTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestCaseBehavior);
  let railsDocsActionCableConnectionTestCaseBehaviorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestCaseBehaviorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestCase/Behavior/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestCaseBehaviorClassMethods);
  let railsDocsActionCableConnectionTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestCaseBehavior);
  let railsDocsActionCableConnectionStreamEventLoop = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionStreamEventLoop', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/StreamEventLoop.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionStreamEventLoop);
  let railsDocsActionCableConnectionIdentification = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionIdentification', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Identification.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionIdentification);
  let railsDocsActionCableConnectionBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Base.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionBase);
  let railsDocsActionCableConnectionAuthorization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionAuthorization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Authorization.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionAuthorization);
  let railsDocsActionCableConnectionTestRequest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestRequest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestRequest.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestRequest);
  let railsDocsActionCableConnectionNonInferrableConnectionError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionNonInferrableConnectionError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/NonInferrableConnectionError.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionNonInferrableConnectionError);
  let railsDocsActionCableConnectionIdentification = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionIdentification', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Identification.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionIdentification);
  let railsDocsActionCableConnectionIdentificationClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionIdentificationClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Identification/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionIdentificationClassMethods);
  let railsDocsActionCableConnectionAuthorization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionAuthorization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Authorization.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionAuthorization);
  let railsDocsActionCableConnectionAuthorizationUnauthorizedError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionAuthorizationUnauthorizedError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/Authorization/UnauthorizedError.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionAuthorizationUnauthorizedError);
  let railsDocsActionCableConnectionTestConnection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestConnection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestConnection.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestConnection);
  let railsDocsActionCableConnectionTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionTestCase);
  let railsDocsActionCableConnectionInternalChannel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnectionInternalChannel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection/InternalChannel.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnectionInternalChannel);
  let railsDocsActionCableServer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server.html'));
  })
  context.subscriptions.push(railsDocsActionCableServer);
  let railsDocsActionCableServerBroadcasting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerBroadcasting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Broadcasting.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerBroadcasting);
  let railsDocsActionCableServerBroadcastingBroadcaster = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerBroadcastingBroadcaster', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Broadcasting/Broadcaster.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerBroadcastingBroadcaster);
  let railsDocsActionCableServerBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Base.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerBase);
  let railsDocsActionCableServerBroadcasting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerBroadcasting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Broadcasting.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerBroadcasting);
  let railsDocsActionCableServerConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Configuration.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerConfiguration);
  let railsDocsActionCableServerWorker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerWorker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Worker.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerWorker);
  let railsDocsActionCableServerWorker = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerWorker', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Worker.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerWorker);
  let railsDocsActionCableServerWorkerActiveRecordConnectionManagement = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServerWorkerActiveRecordConnectionManagement', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server/Worker/ActiveRecordConnectionManagement.html'));
  })
  context.subscriptions.push(railsDocsActionCableServerWorkerActiveRecordConnectionManagement);
  let railsDocsActionCableChannel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannel);
  let railsDocsActionCableChannel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannel);
  let railsDocsActionCableChannelTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelTestCase);
  let railsDocsActionCableChannelTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelTestCaseBehavior);
  let railsDocsActionCableChannelTestCaseBehaviorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelTestCaseBehaviorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/TestCase/Behavior/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelTestCaseBehaviorClassMethods);
  let railsDocsActionCableChannelTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelTestCaseBehavior);
  let railsDocsActionCableChannelCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelCallbacks);
  let railsDocsActionCableChannelBroadcasting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelBroadcasting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Broadcasting.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelBroadcasting);
  let railsDocsActionCableChannelBroadcastingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelBroadcastingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Broadcasting/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelBroadcastingClassMethods);
  let railsDocsActionCableChannelBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Base.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelBase);
  let railsDocsActionCableChannelCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelCallbacks);
  let railsDocsActionCableChannelCallbacksClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelCallbacksClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Callbacks/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelCallbacksClassMethods);
  let railsDocsActionCableChannelBroadcasting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelBroadcasting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Broadcasting.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelBroadcasting);
  let railsDocsActionCableChannelConnectionStub = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelConnectionStub', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/ConnectionStub.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelConnectionStub);
  let railsDocsActionCableChannelChannelStub = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelChannelStub', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/ChannelStub.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelChannelStub);
  let railsDocsActionCableChannelPeriodicTimers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelPeriodicTimers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/PeriodicTimers.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelPeriodicTimers);
  let railsDocsActionCableChannelNonInferrableChannelError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelNonInferrableChannelError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/NonInferrableChannelError.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelNonInferrableChannelError);
  let railsDocsActionCableChannelNaming = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelNaming', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Naming.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelNaming);
  let railsDocsActionCableChannelNamingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelNamingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Naming/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelNamingClassMethods);
  let railsDocsActionCableChannelStreams = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelStreams', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Streams.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelStreams);
  let railsDocsActionCableChannelTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelTestCase);
  let railsDocsActionCableChannelNaming = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelNaming', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/Naming.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelNaming);
  let railsDocsActionCableChannelPeriodicTimers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelPeriodicTimers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/PeriodicTimers.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelPeriodicTimers);
  let railsDocsActionCableChannelPeriodicTimersClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableChannelPeriodicTimersClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Channel/PeriodicTimers/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionCableChannelPeriodicTimersClassMethods);
  let railsDocsActionCableConnection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableConnection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Connection.html'));
  })
  context.subscriptions.push(railsDocsActionCableConnection);
  let railsDocsActionCableRemoteConnections = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableRemoteConnections', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/RemoteConnections.html'));
  })
  context.subscriptions.push(railsDocsActionCableRemoteConnections);
  let railsDocsActionCableRemoteConnectionsRemoteConnection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableRemoteConnectionsRemoteConnection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/RemoteConnections/RemoteConnection.html'));
  })
  context.subscriptions.push(railsDocsActionCableRemoteConnectionsRemoteConnection);
  let railsDocsActionCableRemoteConnectionsRemoteConnectionInvalidIdentifiersError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableRemoteConnectionsRemoteConnectionInvalidIdentifiersError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/RemoteConnections/RemoteConnection/InvalidIdentifiersError.html'));
  })
  context.subscriptions.push(railsDocsActionCableRemoteConnectionsRemoteConnectionInvalidIdentifiersError);
  let railsDocsActionCableRemoteConnectionsRemoteConnection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableRemoteConnectionsRemoteConnection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/RemoteConnections/RemoteConnection.html'));
  })
  context.subscriptions.push(railsDocsActionCableRemoteConnectionsRemoteConnection);
  let railsDocsActionCableSubscriptionAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapter);
  let railsDocsActionCableSubscriptionAdapterAsync = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterAsync', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Async.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterAsync);
  let railsDocsActionCableSubscriptionAdapterPostgreSQL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterPostgreSQL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/PostgreSQL.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterPostgreSQL);
  let railsDocsActionCableSubscriptionAdapterSubscriberMap = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterSubscriberMap', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/SubscriberMap.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterSubscriberMap);
  let railsDocsActionCableSubscriptionAdapterPostgreSQL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterPostgreSQL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/PostgreSQL.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterPostgreSQL);
  let railsDocsActionCableSubscriptionAdapterPostgreSQLListener = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterPostgreSQLListener', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/PostgreSQL/Listener.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterPostgreSQLListener);
  let railsDocsActionCableSubscriptionAdapterBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Base.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterBase);
  let railsDocsActionCableSubscriptionAdapterRedis = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterRedis', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Redis.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterRedis);
  let railsDocsActionCableSubscriptionAdapterRedis = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterRedis', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Redis.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterRedis);
  let railsDocsActionCableSubscriptionAdapterRedisListener = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterRedisListener', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Redis/Listener.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterRedisListener);
  let railsDocsActionCableSubscriptionAdapterAsync = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterAsync', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Async.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterAsync);
  let railsDocsActionCableSubscriptionAdapterAsyncAsyncSubscriberMap = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterAsyncAsyncSubscriberMap', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Async/AsyncSubscriberMap.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterAsyncAsyncSubscriberMap);
  let railsDocsActionCableSubscriptionAdapterTest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapterTest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter/Test.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapterTest);
  let railsDocsActionCableServer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableServer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Server.html'));
  })
  context.subscriptions.push(railsDocsActionCableServer);
  let railsDocsActionCableSubscriptionAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableSubscriptionAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/SubscriptionAdapter.html'));
  })
  context.subscriptions.push(railsDocsActionCableSubscriptionAdapter);
  let railsDocsActionCableVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActionCableVERSION);
  let railsDocsActionCableTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionCableTestCase);
  let railsDocsActionCableHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActionCableHelpers);
  let railsDocsActionCableHelpersActionCableHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCableHelpersActionCableHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable/Helpers/ActionCableHelper.html'));
  })
  context.subscriptions.push(railsDocsActionCableHelpersActionCableHelper);
  let railsDocsUnboundMethod = vscode.commands.registerCommand('vscode-rails-docs.railsDocsUnboundMethod', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/UnboundMethod.html'));
  })
  context.subscriptions.push(railsDocsUnboundMethod);
  let railsDocsEnumerable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsEnumerable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Enumerable.html'));
  })
  context.subscriptions.push(railsDocsEnumerable);
  let railsDocsEnumerableSoleItemExpectedError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsEnumerableSoleItemExpectedError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Enumerable/SoleItemExpectedError.html'));
  })
  context.subscriptions.push(railsDocsEnumerableSoleItemExpectedError);
  let railsDocsSingleton = vscode.commands.registerCommand('vscode-rails-docs.railsDocsSingleton', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Singleton.html'));
  })
  context.subscriptions.push(railsDocsSingleton);
  let railsDocsAbstractController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController.html'));
  })
  context.subscriptions.push(railsDocsAbstractController);
  let railsDocsAbstractControllerCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCallbacks);
  let railsDocsAbstractControllerCaching = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCaching', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Caching.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCaching);
  let railsDocsAbstractControllerHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Helpers.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerHelpers);
  let railsDocsAbstractControllerBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Base.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerBase);
  let railsDocsAbstractControllerCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCallbacks);
  let railsDocsAbstractControllerCallbacksClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCallbacksClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Callbacks/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCallbacksClassMethods);
  let railsDocsAbstractControllerRendering = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerRendering', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Rendering.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerRendering);
  let railsDocsAbstractControllerRailties = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerRailties', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Railties.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerRailties);
  let railsDocsAbstractControllerRailtiesRoutesHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerRailtiesRoutesHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Railties/RoutesHelpers.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerRailtiesRoutesHelpers);
  let railsDocsAbstractControllerTranslation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerTranslation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Translation.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerTranslation);
  let railsDocsAbstractControllerUrlFor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerUrlFor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/UrlFor.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerUrlFor);
  let railsDocsAbstractControllerUrlForClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerUrlForClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/UrlFor/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerUrlForClassMethods);
  let railsDocsAbstractControllerCollector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCollector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Collector.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCollector);
  let railsDocsAbstractControllerRailties = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerRailties', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Railties.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerRailties);
  let railsDocsAbstractControllerActionNotFound = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerActionNotFound', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/ActionNotFound.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerActionNotFound);
  let railsDocsAbstractControllerUrlFor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerUrlFor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/UrlFor.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerUrlFor);
  let railsDocsAbstractControllerDoubleRenderError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerDoubleRenderError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/DoubleRenderError.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerDoubleRenderError);
  let railsDocsAbstractControllerCaching = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCaching', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Caching.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCaching);
  let railsDocsAbstractControllerCachingFragments = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCachingFragments', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Caching/Fragments.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCachingFragments);
  let railsDocsAbstractControllerCachingFragmentsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCachingFragmentsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Caching/Fragments/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCachingFragmentsClassMethods);
  let railsDocsAbstractControllerCachingFragments = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCachingFragments', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Caching/Fragments.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCachingFragments);
  let railsDocsAbstractControllerCachingConfigMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCachingConfigMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Caching/ConfigMethods.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCachingConfigMethods);
  let railsDocsAbstractControllerCachingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerCachingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Caching/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerCachingClassMethods);
  let railsDocsAbstractControllerHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Helpers.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerHelpers);
  let railsDocsAbstractControllerHelpersClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerHelpersClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Helpers/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerHelpersClassMethods);
  let railsDocsAbstractControllerHelpersMissingHelperError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerHelpersMissingHelperError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/Helpers/MissingHelperError.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerHelpersMissingHelperError);
  let railsDocsAbstractControllerActionNotFound = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerActionNotFound', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/ActionNotFound.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerActionNotFound);
  let railsDocsAbstractControllerActionNotFoundCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsAbstractControllerActionNotFoundCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/AbstractController/ActionNotFound/Correction.html'));
  })
  context.subscriptions.push(railsDocsAbstractControllerActionNotFoundCorrection);
  let railsDocsMail = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMail', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mail.html'));
  })
  context.subscriptions.push(railsDocsMail);
  let railsDocsActionText = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionText', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText.html'));
  })
  context.subscriptions.push(railsDocsActionText);
  let railsDocsFloat = vscode.commands.registerCommand('vscode-rails-docs.railsDocsFloat', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Float.html'));
  })
  context.subscriptions.push(railsDocsFloat);
  let railsDocsBigDecimal = vscode.commands.registerCommand('vscode-rails-docs.railsDocsBigDecimal', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/BigDecimal.html'));
  })
  context.subscriptions.push(railsDocsBigDecimal);
  let railsDocsTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Time.html'));
  })
  context.subscriptions.push(railsDocsTime);
  let railsDocsObject = vscode.commands.registerCommand('vscode-rails-docs.railsDocsObject', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Object.html'));
  })
  context.subscriptions.push(railsDocsObject);
  let railsDocsClass = vscode.commands.registerCommand('vscode-rails-docs.railsDocsClass', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Class.html'));
  })
  context.subscriptions.push(railsDocsClass);
  let railsDocsString = vscode.commands.registerCommand('vscode-rails-docs.railsDocsString', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/String.html'));
  })
  context.subscriptions.push(railsDocsString);
  let railsDocsFalseClass = vscode.commands.registerCommand('vscode-rails-docs.railsDocsFalseClass', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/FalseClass.html'));
  })
  context.subscriptions.push(railsDocsFalseClass);
  let railsDocsMime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime.html'));
  })
  context.subscriptions.push(railsDocsMime);
  let railsDocsActionDispatch = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatch', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch.html'));
  })
  context.subscriptions.push(railsDocsActionDispatch);
  let railsDocsActionDispatchAssertions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchAssertions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Assertions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchAssertions);
  let railsDocsActionDispatchRequestId = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRequestId', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RequestId.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRequestId);
  let railsDocsActionDispatchRailsMetaStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsMetaStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsMetaStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsMetaStore);
  let railsDocsActionDispatchCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchCallbacks);
  let railsDocsActionDispatchRouting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRouting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRouting);
  let railsDocsActionDispatchIntegration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Integration.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegration);
  let railsDocsActionDispatchResponse = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchResponse', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Response.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchResponse);
  let railsDocsActionDispatchResponseRackBody = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchResponseRackBody', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Response/RackBody.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchResponseRackBody);
  let railsDocsActionDispatchDebugExceptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchDebugExceptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/DebugExceptions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchDebugExceptions);
  let railsDocsActionDispatchRemoteIp = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRemoteIp', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RemoteIp.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRemoteIp);
  let railsDocsActionDispatchMiddlewareStack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchMiddlewareStack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/MiddlewareStack.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchMiddlewareStack);
  let railsDocsActionDispatchResponse = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchResponse', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Response.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchResponse);
  let railsDocsActionDispatchShowExceptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchShowExceptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/ShowExceptions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchShowExceptions);
  let railsDocsActionDispatchContentSecurityPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchContentSecurityPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/ContentSecurityPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchContentSecurityPolicy);
  let railsDocsActionDispatchContentSecurityPolicyMiddleware = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchContentSecurityPolicyMiddleware', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/ContentSecurityPolicy/Middleware.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchContentSecurityPolicyMiddleware);
  let railsDocsActionDispatchContentSecurityPolicyRequest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchContentSecurityPolicyRequest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/ContentSecurityPolicy/Request.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchContentSecurityPolicyRequest);
  let railsDocsActionDispatchSystemTesting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSystemTesting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/SystemTesting.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSystemTesting);
  let railsDocsActionDispatchSystemTestingTestHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSystemTestingTestHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/SystemTesting/TestHelpers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSystemTestingTestHelpers);
  let railsDocsActionDispatchSystemTestingTestHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSystemTestingTestHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/SystemTesting/TestHelpers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSystemTestingTestHelpers);
  let railsDocsActionDispatchSystemTestingTestHelpersScreenshotHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSystemTestingTestHelpersScreenshotHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/SystemTesting/TestHelpers/ScreenshotHelper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSystemTestingTestHelpersScreenshotHelper);
  let railsDocsActionDispatchExceptionWrapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchExceptionWrapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/ExceptionWrapper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchExceptionWrapper);
  let railsDocsActionDispatchAssertionResponse = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchAssertionResponse', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/AssertionResponse.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchAssertionResponse);
  let railsDocsActionDispatchTestProcess = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchTestProcess', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/TestProcess.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchTestProcess);
  let railsDocsActionDispatchIntegration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Integration.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegration);
  let railsDocsActionDispatchIntegrationRequestHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationRequestHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Integration/RequestHelpers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationRequestHelpers);
  let railsDocsActionDispatchIntegrationRunner = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationRunner', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Integration/Runner.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationRunner);
  let railsDocsActionDispatchIntegrationSession = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationSession', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Integration/Session.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationSession);
  let railsDocsActionDispatchRequestCookieMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRequestCookieMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RequestCookieMethods.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRequestCookieMethods);
  let railsDocsActionDispatchPermissionsPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchPermissionsPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/PermissionsPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchPermissionsPolicy);
  let railsDocsActionDispatchJourney = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourney', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourney);
  let railsDocsActionDispatchCookies = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchCookies', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchCookies);
  let railsDocsActionDispatchRemoteIp = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRemoteIp', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RemoteIp.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRemoteIp);
  let railsDocsActionDispatchRemoteIpIpSpoofAttackError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRemoteIpIpSpoofAttackError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RemoteIp/IpSpoofAttackError.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRemoteIpIpSpoofAttackError);
  let railsDocsActionDispatchRemoteIpGetIp = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRemoteIpGetIp', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RemoteIp/GetIp.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRemoteIpGetIp);
  let railsDocsActionDispatchRailsMetaStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsMetaStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsMetaStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsMetaStore);
  let railsDocsActionDispatchRailsMetaStoreRack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsMetaStoreRack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsMetaStore/Rack.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsMetaStoreRack);
  let railsDocsActionDispatchRailsMetaStoreRack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsMetaStoreRack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsMetaStore/Rack.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsMetaStoreRack);
  let railsDocsActionDispatchRailsMetaStoreRackCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsMetaStoreRackCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsMetaStore/Rack/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsMetaStoreRackCache);
  let railsDocsActionDispatchRailsMetaStoreRackCacheMetaStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsMetaStoreRackCacheMetaStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsMetaStore/Rack/Cache/MetaStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsMetaStoreRackCacheMetaStore);
  let railsDocsActionDispatchRailsMetaStoreRackCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsMetaStoreRackCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsMetaStore/Rack/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsMetaStoreRackCache);
  let railsDocsActionDispatchSSL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSSL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/SSL.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSSL);
  let railsDocsActionDispatchRequestEncoder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRequestEncoder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RequestEncoder.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRequestEncoder);
  let railsDocsActionDispatchRequestEncoderIdentityEncoder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRequestEncoderIdentityEncoder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RequestEncoder/IdentityEncoder.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRequestEncoderIdentityEncoder);
  let railsDocsActionDispatchAssertions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchAssertions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Assertions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchAssertions);
  let railsDocsActionDispatchAssertionsRoutingAssertions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchAssertionsRoutingAssertions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Assertions/RoutingAssertions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchAssertionsRoutingAssertions);
  let railsDocsActionDispatchAssertionsResponseAssertions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchAssertionsResponseAssertions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Assertions/ResponseAssertions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchAssertionsResponseAssertions);
  let railsDocsActionDispatchTestProcess = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchTestProcess', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/TestProcess.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchTestProcess);
  let railsDocsActionDispatchTestProcessFixtureFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchTestProcessFixtureFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/TestProcess/FixtureFile.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchTestProcessFixtureFile);
  let railsDocsActionDispatchFlash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchFlash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Flash.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchFlash);
  let railsDocsActionDispatchJourney = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourney', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourney);
  let railsDocsActionDispatchJourneyFormat = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyFormat', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Format.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyFormat);
  let railsDocsActionDispatchJourneyParser = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyParser', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Parser.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyParser);
  let railsDocsActionDispatchJourneyRoute = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyRoute', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Route.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyRoute);
  let railsDocsActionDispatchJourneyRouteVerbMatchers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyRouteVerbMatchers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Route/VerbMatchers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyRouteVerbMatchers);
  let railsDocsActionDispatchJourneyRouteVerbMatchersAll = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyRouteVerbMatchersAll', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Route/VerbMatchers/All.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyRouteVerbMatchersAll);
  let railsDocsActionDispatchJourneyRouteVerbMatchersUnknown = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyRouteVerbMatchersUnknown', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Route/VerbMatchers/Unknown.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyRouteVerbMatchersUnknown);
  let railsDocsActionDispatchJourneyRouteVerbMatchers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyRouteVerbMatchers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Route/VerbMatchers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyRouteVerbMatchers);
  let railsDocsActionDispatchJourneyRoute = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyRoute', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Route.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyRoute);
  let railsDocsActionDispatchJourneyFormatter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyFormatter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Formatter.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyFormatter);
  let railsDocsActionDispatchJourneyFormatterMissingRoute = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyFormatterMissingRoute', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Formatter/MissingRoute.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyFormatterMissingRoute);
  let railsDocsActionDispatchJourneyFormatterRouteWithParams = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyFormatterRouteWithParams', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Formatter/RouteWithParams.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyFormatterRouteWithParams);
  let railsDocsActionDispatchJourneyFormatter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchJourneyFormatter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Journey/Formatter.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchJourneyFormatter);
  let railsDocsActionDispatchPublicExceptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchPublicExceptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/PublicExceptions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchPublicExceptions);
  let railsDocsActionDispatchTestRequest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchTestRequest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/TestRequest.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchTestRequest);
  let railsDocsActionDispatchFlash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchFlash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Flash.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchFlash);
  let railsDocsActionDispatchFlashRequestMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchFlashRequestMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Flash/RequestMethods.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchFlashRequestMethods);
  let railsDocsActionDispatchFlashFlashHash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchFlashFlashHash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Flash/FlashHash.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchFlashFlashHash);
  let railsDocsActionDispatchSystemTesting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSystemTesting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/SystemTesting.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSystemTesting);
  let railsDocsActionDispatchContentSecurityPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchContentSecurityPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/ContentSecurityPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchContentSecurityPolicy);
  let railsDocsActionDispatchHttp = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttp', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttp);
  let railsDocsActionDispatchMiddlewareStack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchMiddlewareStack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/MiddlewareStack.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchMiddlewareStack);
  let railsDocsActionDispatchMiddlewareStackMiddleware = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchMiddlewareStackMiddleware', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/MiddlewareStack/Middleware.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchMiddlewareStackMiddleware);
  let railsDocsActionDispatchMiddlewareStackInstrumentationProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchMiddlewareStackInstrumentationProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/MiddlewareStack/InstrumentationProxy.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchMiddlewareStackInstrumentationProxy);
  let railsDocsActionDispatchMiddlewareStackFakeRuntime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchMiddlewareStackFakeRuntime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/MiddlewareStack/FakeRuntime.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchMiddlewareStackFakeRuntime);
  let railsDocsActionDispatchRailsEntityStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsEntityStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsEntityStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsEntityStore);
  let railsDocsActionDispatchRailsEntityStoreRack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsEntityStoreRack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsEntityStore/Rack.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsEntityStoreRack);
  let railsDocsActionDispatchRailsEntityStoreRack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsEntityStoreRack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsEntityStore/Rack.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsEntityStoreRack);
  let railsDocsActionDispatchRailsEntityStoreRackCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsEntityStoreRackCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsEntityStore/Rack/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsEntityStoreRackCache);
  let railsDocsActionDispatchRailsEntityStoreRackCacheEntityStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsEntityStoreRackCacheEntityStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsEntityStore/Rack/Cache/EntityStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsEntityStoreRackCacheEntityStore);
  let railsDocsActionDispatchRailsEntityStoreRackCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsEntityStoreRackCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsEntityStore/Rack/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsEntityStoreRackCache);
  let railsDocsActionDispatchHttp = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttp', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttp);
  let railsDocsActionDispatchHttpCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpCache);
  let railsDocsActionDispatchHttpCacheResponse = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpCacheResponse', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Cache/Response.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpCacheResponse);
  let railsDocsActionDispatchHttpCacheRequest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpCacheRequest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Cache/Request.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpCacheRequest);
  let railsDocsActionDispatchHttpMimeNegotiation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpMimeNegotiation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/MimeNegotiation.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpMimeNegotiation);
  let railsDocsActionDispatchHttpUploadedFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpUploadedFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/UploadedFile.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpUploadedFile);
  let railsDocsActionDispatchHttpCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpCache);
  let railsDocsActionDispatchHttpFilterRedirect = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpFilterRedirect', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/FilterRedirect.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpFilterRedirect);
  let railsDocsActionDispatchHttpURL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpURL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/URL.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpURL);
  let railsDocsActionDispatchHttpHeaders = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpHeaders', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Headers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpHeaders);
  let railsDocsActionDispatchHttpParameters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpParameters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Parameters.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpParameters);
  let railsDocsActionDispatchHttpParametersClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpParametersClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Parameters/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpParametersClassMethods);
  let railsDocsActionDispatchHttpParametersParseError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpParametersParseError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Parameters/ParseError.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpParametersParseError);
  let railsDocsActionDispatchHttpParameters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpParameters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/Parameters.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpParameters);
  let railsDocsActionDispatchHttpFilterParameters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpFilterParameters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/FilterParameters.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpFilterParameters);
  let railsDocsActionDispatchHttpMimeNegotiation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpMimeNegotiation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/MimeNegotiation.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpMimeNegotiation);
  let railsDocsActionDispatchHttpMimeNegotiationInvalidType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHttpMimeNegotiationInvalidType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Http/MimeNegotiation/InvalidType.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHttpMimeNegotiationInvalidType);
  let railsDocsActionDispatchRailsEntityStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRailsEntityStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RailsEntityStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRailsEntityStore);
  let railsDocsActionDispatchHostAuthorization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchHostAuthorization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/HostAuthorization.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchHostAuthorization);
  let railsDocsActionDispatchIntegrationTest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationTest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/IntegrationTest.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationTest);
  let railsDocsActionDispatchStatic = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchStatic', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Static.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchStatic);
  let railsDocsActionDispatchFileHandler = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchFileHandler', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/FileHandler.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchFileHandler);
  let railsDocsActionDispatchReloader = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchReloader', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Reloader.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchReloader);
  let railsDocsActionDispatchExecutor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchExecutor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Executor.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchExecutor);
  let railsDocsActionDispatchRouting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRouting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRouting);
  let railsDocsActionDispatchRoutingConsoleFormatter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingConsoleFormatter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/ConsoleFormatter.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingConsoleFormatter);
  let railsDocsActionDispatchRoutingConsoleFormatterBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingConsoleFormatterBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/ConsoleFormatter/Base.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingConsoleFormatterBase);
  let railsDocsActionDispatchRoutingConsoleFormatterExpanded = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingConsoleFormatterExpanded', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/ConsoleFormatter/Expanded.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingConsoleFormatterExpanded);
  let railsDocsActionDispatchRoutingConsoleFormatterSheet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingConsoleFormatterSheet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/ConsoleFormatter/Sheet.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingConsoleFormatterSheet);
  let railsDocsActionDispatchRoutingRedirection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRedirection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Redirection.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRedirection);
  let railsDocsActionDispatchRoutingMapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapper);
  let railsDocsActionDispatchRoutingPolymorphicRoutes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingPolymorphicRoutes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/PolymorphicRoutes.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingPolymorphicRoutes);
  let railsDocsActionDispatchRoutingRouteSet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSet);
  let railsDocsActionDispatchRoutingHtmlTableFormatter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingHtmlTableFormatter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/HtmlTableFormatter.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingHtmlTableFormatter);
  let railsDocsActionDispatchRoutingConsoleFormatter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingConsoleFormatter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/ConsoleFormatter.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingConsoleFormatter);
  let railsDocsActionDispatchRoutingMapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapper);
  let railsDocsActionDispatchRoutingMapperBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapperBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper/Base.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapperBase);
  let railsDocsActionDispatchRoutingMapperHttpHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapperHttpHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper/HttpHelpers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapperHttpHelpers);
  let railsDocsActionDispatchRoutingMapperResources = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapperResources', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper/Resources.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapperResources);
  let railsDocsActionDispatchRoutingMapperScoping = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapperScoping', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper/Scoping.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapperScoping);
  let railsDocsActionDispatchRoutingMapperCustomUrls = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapperCustomUrls', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper/CustomUrls.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapperCustomUrls);
  let railsDocsActionDispatchRoutingMapperConcerns = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingMapperConcerns', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper/Concerns.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingMapperConcerns);
  let railsDocsActionDispatchRoutingUrlFor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingUrlFor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/UrlFor.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingUrlFor);
  let railsDocsActionDispatchRoutingPathRedirect = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingPathRedirect', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/PathRedirect.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingPathRedirect);
  let railsDocsActionDispatchRoutingRouteSet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSet);
  let railsDocsActionDispatchRoutingRouteSetNamedRouteCollection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetNamedRouteCollection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/NamedRouteCollection.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetNamedRouteCollection);
  let railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/NamedRouteCollection/UrlHelper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelper);
  let railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelperOptimizedUrlHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelperOptimizedUrlHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/NamedRouteCollection/UrlHelper/OptimizedUrlHelper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelperOptimizedUrlHelper);
  let railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/NamedRouteCollection/UrlHelper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetNamedRouteCollectionUrlHelper);
  let railsDocsActionDispatchRoutingRouteSetNamedRouteCollection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetNamedRouteCollection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/NamedRouteCollection.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetNamedRouteCollection);
  let railsDocsActionDispatchRoutingRouteSetStaticDispatcher = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetStaticDispatcher', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/StaticDispatcher.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetStaticDispatcher);
  let railsDocsActionDispatchRoutingRouteSetDispatcher = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetDispatcher', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/Dispatcher.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetDispatcher);
  let railsDocsActionDispatchRoutingRouteSetMountedHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetMountedHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/MountedHelpers.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetMountedHelpers);
  let railsDocsActionDispatchRoutingRouteSetCustomUrlHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetCustomUrlHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/CustomUrlHelper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetCustomUrlHelper);
  let railsDocsActionDispatchRoutingRouteSetGenerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteSetGenerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteSet/Generator.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteSetGenerator);
  let railsDocsActionDispatchRoutingRouteWrapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRoutingRouteWrapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Routing/RouteWrapper.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRoutingRouteWrapper);
  let railsDocsActionDispatchDebugLocks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchDebugLocks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/DebugLocks.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchDebugLocks);
  let railsDocsActionDispatchTestResponse = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchTestResponse', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/TestResponse.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchTestResponse);
  let railsDocsActionDispatchRequestEncoder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRequestEncoder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/RequestEncoder.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRequestEncoder);
  let railsDocsActionDispatchIntegrationTest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationTest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/IntegrationTest.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationTest);
  let railsDocsActionDispatchIntegrationTestBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationTestBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/IntegrationTest/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationTestBehavior);
  let railsDocsActionDispatchIntegrationTestBehaviorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationTestBehaviorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/IntegrationTest/Behavior/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationTestBehaviorClassMethods);
  let railsDocsActionDispatchIntegrationTestUrlOptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationTestUrlOptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/IntegrationTest/UrlOptions.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationTestUrlOptions);
  let railsDocsActionDispatchIntegrationTestBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchIntegrationTestBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/IntegrationTest/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchIntegrationTestBehavior);
  let railsDocsActionDispatchSession = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSession', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSession);
  let railsDocsActionDispatchSystemTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSystemTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/SystemTestCase.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSystemTestCase);
  let railsDocsActionDispatchCookies = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchCookies', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchCookies);
  let railsDocsActionDispatchCookiesChainedCookieJars = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchCookiesChainedCookieJars', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Cookies/ChainedCookieJars.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchCookiesChainedCookieJars);
  let railsDocsActionDispatchRequest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchRequest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Request.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchRequest);
  let railsDocsActionDispatchPermissionsPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchPermissionsPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/PermissionsPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchPermissionsPolicy);
  let railsDocsActionDispatchPermissionsPolicyMiddleware = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchPermissionsPolicyMiddleware', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/PermissionsPolicy/Middleware.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchPermissionsPolicyMiddleware);
  let railsDocsActionDispatchPermissionsPolicyRequest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchPermissionsPolicyRequest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/PermissionsPolicy/Request.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchPermissionsPolicyRequest);
  let railsDocsActionDispatchSession = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSession', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSession);
  let railsDocsActionDispatchSessionAbstractSecureStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionAbstractSecureStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/AbstractSecureStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionAbstractSecureStore);
  let railsDocsActionDispatchSessionCookieStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionCookieStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/CookieStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionCookieStore);
  let railsDocsActionDispatchSessionCookieStoreSessionId = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionCookieStoreSessionId', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/CookieStore/SessionId.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionCookieStoreSessionId);
  let railsDocsActionDispatchSessionAbstractStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionAbstractStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/AbstractStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionAbstractStore);
  let railsDocsActionDispatchSessionMemCacheStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionMemCacheStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/MemCacheStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionMemCacheStore);
  let railsDocsActionDispatchSessionStaleSessionCheck = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionStaleSessionCheck', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/StaleSessionCheck.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionStaleSessionCheck);
  let railsDocsActionDispatchSessionCompatibility = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionCompatibility', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/Compatibility.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionCompatibility);
  let railsDocsActionDispatchSessionCookieStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionCookieStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/CookieStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionCookieStore);
  let railsDocsActionDispatchSessionCacheStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionDispatchSessionCacheStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionDispatch/Session/CacheStore.html'));
  })
  context.subscriptions.push(railsDocsActionDispatchSessionCacheStore);
  let railsDocsActionCable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionCable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionCable.html'));
  })
  context.subscriptions.push(railsDocsActionCable);
  let railsDocsBenchmark = vscode.commands.registerCommand('vscode-rails-docs.railsDocsBenchmark', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Benchmark.html'));
  })
  context.subscriptions.push(railsDocsBenchmark);
  let railsDocsFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/File.html'));
  })
  context.subscriptions.push(railsDocsFile);
  let railsDocsActiveStorage = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorage', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage.html'));
  })
  context.subscriptions.push(railsDocsActiveStorage);
  let railsDocsSymbol = vscode.commands.registerCommand('vscode-rails-docs.railsDocsSymbol', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Symbol.html'));
  })
  context.subscriptions.push(railsDocsSymbol);
  let railsDocsActionText = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionText', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText.html'));
  })
  context.subscriptions.push(railsDocsActionText);
  let railsDocsActionTextSerialization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextSerialization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Serialization.html'));
  })
  context.subscriptions.push(railsDocsActionTextSerialization);
  let railsDocsActionTextSystemTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextSystemTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/SystemTestHelper.html'));
  })
  context.subscriptions.push(railsDocsActionTextSystemTestHelper);
  let railsDocsActionTextEncryptedRichText = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextEncryptedRichText', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/EncryptedRichText.html'));
  })
  context.subscriptions.push(railsDocsActionTextEncryptedRichText);
  let railsDocsActionTextAttachable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachable.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachable);
  let railsDocsActionTextFixtureSet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextFixtureSet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/FixtureSet.html'));
  })
  context.subscriptions.push(railsDocsActionTextFixtureSet);
  let railsDocsActionTextHtmlConversion = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextHtmlConversion', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/HtmlConversion.html'));
  })
  context.subscriptions.push(railsDocsActionTextHtmlConversion);
  let railsDocsActionTextAttachmentGallery = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachmentGallery', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/AttachmentGallery.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachmentGallery);
  let railsDocsActionTextTagHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextTagHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/TagHelper.html'));
  })
  context.subscriptions.push(railsDocsActionTextTagHelper);
  let railsDocsActionTextRichText = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextRichText', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/RichText.html'));
  })
  context.subscriptions.push(railsDocsActionTextRichText);
  let railsDocsActionTextEncryption = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextEncryption', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Encryption.html'));
  })
  context.subscriptions.push(railsDocsActionTextEncryption);
  let railsDocsActionTextAttachables = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachables', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachables.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachables);
  let railsDocsActionTextAttachablesRemoteImage = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachablesRemoteImage', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachables/RemoteImage.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachablesRemoteImage);
  let railsDocsActionTextAttachablesContentAttachment = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachablesContentAttachment', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachables/ContentAttachment.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachablesContentAttachment);
  let railsDocsActionTextAttachablesMissingAttachable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachablesMissingAttachable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachables/MissingAttachable.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachablesMissingAttachable);
  let railsDocsActionTextTrixAttachment = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextTrixAttachment', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/TrixAttachment.html'));
  })
  context.subscriptions.push(railsDocsActionTextTrixAttachment);
  let railsDocsActionTextFragment = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextFragment', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Fragment.html'));
  })
  context.subscriptions.push(railsDocsActionTextFragment);
  let railsDocsActionTextEngine = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextEngine', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Engine.html'));
  })
  context.subscriptions.push(railsDocsActionTextEngine);
  let railsDocsActionTextAttachment = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachment', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachment.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachment);
  let railsDocsActionTextAttribute = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttribute', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attribute.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttribute);
  let railsDocsActionTextAttachables = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachables', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachables.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachables);
  let railsDocsActionTextAttachments = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachments', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachments.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachments);
  let railsDocsActionTextAttachmentsCaching = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachmentsCaching', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachments/Caching.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachmentsCaching);
  let railsDocsActionTextAttachmentsMinification = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachmentsMinification', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachments/Minification.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachmentsMinification);
  let railsDocsActionTextAttachmentsTrixConversion = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachmentsTrixConversion', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachments/TrixConversion.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachmentsTrixConversion);
  let railsDocsActionTextAttachments = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextAttachments', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Attachments.html'));
  })
  context.subscriptions.push(railsDocsActionTextAttachments);
  let railsDocsActionTextPlainTextConversion = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextPlainTextConversion', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/PlainTextConversion.html'));
  })
  context.subscriptions.push(railsDocsActionTextPlainTextConversion);
  let railsDocsActionTextVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActionTextVERSION);
  let railsDocsActionTextContentHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextContentHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/ContentHelper.html'));
  })
  context.subscriptions.push(railsDocsActionTextContentHelper);
  let railsDocsActionTextContent = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionTextContent', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionText/Content.html'));
  })
  context.subscriptions.push(railsDocsActionTextContent);
  let railsDocsKernel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsKernel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Kernel.html'));
  })
  context.subscriptions.push(railsDocsKernel);
  let railsDocsArray = vscode.commands.registerCommand('vscode-rails-docs.railsDocsArray', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Array.html'));
  })
  context.subscriptions.push(railsDocsArray);
  let railsDocsRegexp = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRegexp', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Regexp.html'));
  })
  context.subscriptions.push(railsDocsRegexp);
  let railsDocsLoadError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsLoadError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/LoadError.html'));
  })
  context.subscriptions.push(railsDocsLoadError);
  let railsDocsActiveJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveJob.html'));
  })
  context.subscriptions.push(railsDocsActiveJob);
  let railsDocsActionMailbox = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailbox', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox.html'));
  })
  context.subscriptions.push(railsDocsActionMailbox);
  let railsDocsArel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsArel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Arel.html'));
  })
  context.subscriptions.push(railsDocsArel);
  let railsDocsArelNodes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsArelNodes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Arel/Nodes.html'));
  })
  context.subscriptions.push(railsDocsArelNodes);
  let railsDocsRange = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRange', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Range.html'));
  })
  context.subscriptions.push(railsDocsRange);
  let railsDocsArel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsArel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Arel.html'));
  })
  context.subscriptions.push(railsDocsArel);
  let railsDocsMime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime.html'));
  })
  context.subscriptions.push(railsDocsMime);
  let railsDocsMimeNullType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMimeNullType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime/NullType.html'));
  })
  context.subscriptions.push(railsDocsMimeNullType);
  let railsDocsMimeType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMimeType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime/Type.html'));
  })
  context.subscriptions.push(railsDocsMimeType);
  let railsDocsMimeAllType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMimeAllType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime/AllType.html'));
  })
  context.subscriptions.push(railsDocsMimeAllType);
  let railsDocsMimeType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMimeType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime/Type.html'));
  })
  context.subscriptions.push(railsDocsMimeType);
  let railsDocsMimeTypeInvalidMimeType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMimeTypeInvalidMimeType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime/Type/InvalidMimeType.html'));
  })
  context.subscriptions.push(railsDocsMimeTypeInvalidMimeType);
  let railsDocsMimeMimes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMimeMimes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Mime/Mimes.html'));
  })
  context.subscriptions.push(railsDocsMimeMimes);
  let railsDocsActiveRecord = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecord', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord.html'));
  })
  context.subscriptions.push(railsDocsActiveRecord);
  let railsDocsActiveRecordDatabaseAlreadyExists = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDatabaseAlreadyExists', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DatabaseAlreadyExists.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDatabaseAlreadyExists);
  let railsDocsActiveRecordInverseOfAssociationNotFoundError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordInverseOfAssociationNotFoundError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/InverseOfAssociationNotFoundError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordInverseOfAssociationNotFoundError);
  let railsDocsActiveRecordInverseOfAssociationNotFoundErrorCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordInverseOfAssociationNotFoundErrorCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/InverseOfAssociationNotFoundError/Correction.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordInverseOfAssociationNotFoundErrorCorrection);
  let railsDocsActiveRecordPersistence = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordPersistence', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Persistence.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordPersistence);
  let railsDocsActiveRecordDatabaseConfigurations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDatabaseConfigurations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DatabaseConfigurations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDatabaseConfigurations);
  let railsDocsActiveRecordSubclassNotFound = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSubclassNotFound', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SubclassNotFound.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSubclassNotFound);
  let railsDocsActiveRecordStrictLoadingViolationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStrictLoadingViolationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/StrictLoadingViolationError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStrictLoadingViolationError);
  let railsDocsActiveRecordAssociationNotFoundError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationNotFoundError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AssociationNotFoundError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationNotFoundError);
  let railsDocsActiveRecordLogSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLogSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/LogSubscriber.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLogSubscriber);
  let railsDocsActiveRecordEncryption = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryption', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryption);
  let railsDocsActiveRecordEncryptionMessage = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionMessage', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Message.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionMessage);
  let railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicUniquenessValidator.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidator);
  let railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidatorEncryptedUniquenessValidator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidatorEncryptedUniquenessValidator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicUniquenessValidator/EncryptedUniquenessValidator.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidatorEncryptedUniquenessValidator);
  let railsDocsActiveRecordEncryptionKeyGenerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionKeyGenerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/KeyGenerator.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionKeyGenerator);
  let railsDocsActiveRecordEncryptionMessageSerializer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionMessageSerializer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/MessageSerializer.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionMessageSerializer);
  let railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicUniquenessValidator.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicUniquenessValidator);
  let railsDocsActiveRecordEncryptionNullEncryptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionNullEncryptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/NullEncryptor.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionNullEncryptor);
  let railsDocsActiveRecordEncryptionEncryptedFixtures = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionEncryptedFixtures', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/EncryptedFixtures.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionEncryptedFixtures);
  let railsDocsActiveRecordEncryptionContext = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionContext', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Context.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionContext);
  let railsDocsActiveRecordEncryptionConfigurable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionConfigurable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Configurable.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionConfigurable);
  let railsDocsActiveRecordEncryptionCipher = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionCipher', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Cipher.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionCipher);
  let railsDocsActiveRecordEncryptionCipherAes256Gcm = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionCipherAes256Gcm', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Cipher/Aes256Gcm.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionCipherAes256Gcm);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueries = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueries', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueries);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueriesAdditionalValue = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueriesAdditionalValue', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries/AdditionalValue.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueriesAdditionalValue);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueriesExtendedEncryptableType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueriesExtendedEncryptableType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries/ExtendedEncryptableType.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueriesExtendedEncryptableType);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueriesEncryptedQueryArgumentProcessor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueriesEncryptedQueryArgumentProcessor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries/EncryptedQueryArgumentProcessor.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueriesEncryptedQueryArgumentProcessor);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueriesRelationQueries = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueriesRelationQueries', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries/RelationQueries.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueriesRelationQueries);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueriesInWithAdditionalValues = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueriesInWithAdditionalValues', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries/InWithAdditionalValues.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueriesInWithAdditionalValues);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueriesCoreQueries = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueriesCoreQueries', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries/CoreQueries.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueriesCoreQueries);
  let railsDocsActiveRecordEncryptionCipher = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionCipher', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Cipher.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionCipher);
  let railsDocsActiveRecordEncryptionContexts = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionContexts', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Contexts.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionContexts);
  let railsDocsActiveRecordEncryptionExtendedDeterministicQueries = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionExtendedDeterministicQueries', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ExtendedDeterministicQueries.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionExtendedDeterministicQueries);
  let railsDocsActiveRecordEncryptionEnvelopeEncryptionKeyProvider = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionEnvelopeEncryptionKeyProvider', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/EnvelopeEncryptionKeyProvider.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionEnvelopeEncryptionKeyProvider);
  let railsDocsActiveRecordEncryptionEncryptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionEncryptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Encryptor.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionEncryptor);
  let railsDocsActiveRecordEncryptionDeterministicKeyProvider = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionDeterministicKeyProvider', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/DeterministicKeyProvider.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionDeterministicKeyProvider);
  let railsDocsActiveRecordEncryptionDerivedSecretKeyProvider = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionDerivedSecretKeyProvider', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/DerivedSecretKeyProvider.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionDerivedSecretKeyProvider);
  let railsDocsActiveRecordEncryptionProperties = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionProperties', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Properties.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionProperties);
  let railsDocsActiveRecordEncryptionEncryptableRecord = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionEncryptableRecord', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/EncryptableRecord.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionEncryptableRecord);
  let railsDocsActiveRecordEncryptionEncryptingOnlyEncryptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionEncryptingOnlyEncryptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/EncryptingOnlyEncryptor.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionEncryptingOnlyEncryptor);
  let railsDocsActiveRecordEncryptionKeyProvider = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionKeyProvider', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/KeyProvider.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionKeyProvider);
  let railsDocsActiveRecordEncryptionEncryptedAttributeType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionEncryptedAttributeType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/EncryptedAttributeType.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionEncryptedAttributeType);
  let railsDocsActiveRecordEncryptionConfig = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionConfig', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Config.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionConfig);
  let railsDocsActiveRecordEncryptionErrors = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrors', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrors);
  let railsDocsActiveRecordEncryptionKey = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionKey', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Key.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionKey);
  let railsDocsActiveRecordEncryptionErrors = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrors', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrors);
  let railsDocsActiveRecordEncryptionErrorsBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrorsBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors/Base.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrorsBase);
  let railsDocsActiveRecordEncryptionErrorsForbiddenClass = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrorsForbiddenClass', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors/ForbiddenClass.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrorsForbiddenClass);
  let railsDocsActiveRecordEncryptionErrorsConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrorsConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors/Configuration.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrorsConfiguration);
  let railsDocsActiveRecordEncryptionErrorsEncryption = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrorsEncryption', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors/Encryption.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrorsEncryption);
  let railsDocsActiveRecordEncryptionErrorsEncoding = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrorsEncoding', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors/Encoding.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrorsEncoding);
  let railsDocsActiveRecordEncryptionErrorsDecryption = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrorsDecryption', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors/Decryption.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrorsDecryption);
  let railsDocsActiveRecordEncryptionErrorsEncryptedContentIntegrity = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionErrorsEncryptedContentIntegrity', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Errors/EncryptedContentIntegrity.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionErrorsEncryptedContentIntegrity);
  let railsDocsActiveRecordEncryptionScheme = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionScheme', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/Scheme.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionScheme);
  let railsDocsActiveRecordEncryptionReadOnlyNullEncryptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryptionReadOnlyNullEncryptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption/ReadOnlyNullEncryptor.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryptionReadOnlyNullEncryptor);
  let railsDocsActiveRecordSanitization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSanitization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Sanitization.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSanitization);
  let railsDocsActiveRecordMiddleware = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMiddleware', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Middleware.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMiddleware);
  let railsDocsActiveRecordMiddlewareDatabaseSelector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMiddlewareDatabaseSelector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Middleware/DatabaseSelector.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMiddlewareDatabaseSelector);
  let railsDocsActiveRecordAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Attributes.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributes);
  let railsDocsActiveRecordStatementCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStatementCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/StatementCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStatementCache);
  let railsDocsActiveRecordStatementCachePartialQueryCollector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStatementCachePartialQueryCollector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/StatementCache/PartialQueryCollector.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStatementCachePartialQueryCollector);
  let railsDocsActiveRecordHasManyThroughAssociationNotFoundError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordHasManyThroughAssociationNotFoundError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/HasManyThroughAssociationNotFoundError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordHasManyThroughAssociationNotFoundError);
  let railsDocsActiveRecordSerialization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSerialization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Serialization.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSerialization);
  let railsDocsActiveRecordMultiparameterAssignmentErrors = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMultiparameterAssignmentErrors', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/MultiparameterAssignmentErrors.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMultiparameterAssignmentErrors);
  let railsDocsActiveRecordIrreversibleMigration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordIrreversibleMigration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/IrreversibleMigration.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordIrreversibleMigration);
  let railsDocsActiveRecordReadOnlyError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReadOnlyError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ReadOnlyError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReadOnlyError);
  let railsDocsActiveRecordAssociations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociations);
  let railsDocsActiveRecordAssociationsPreloader = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationsPreloader', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations/Preloader.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationsPreloader);
  let railsDocsActiveRecordAssociationsPreloaderAssociation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationsPreloaderAssociation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations/Preloader/Association.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationsPreloaderAssociation);
  let railsDocsActiveRecordAssociationsPreloaderAssociationLoaderQuery = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationsPreloaderAssociationLoaderQuery', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations/Preloader/Association/LoaderQuery.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationsPreloaderAssociationLoaderQuery);
  let railsDocsActiveRecordAssociationsPreloaderAssociation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationsPreloaderAssociation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations/Preloader/Association.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationsPreloaderAssociation);
  let railsDocsActiveRecordAssociationsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationsClassMethods);
  let railsDocsActiveRecordAssociationsCollectionProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationsCollectionProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations/CollectionProxy.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationsCollectionProxy);
  let railsDocsActiveRecordAssociationsPreloader = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationsPreloader', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations/Preloader.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationsPreloader);
  let railsDocsActiveRecordQueryCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryCache);
  let railsDocsActiveRecordMigrationContext = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationContext', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/MigrationContext.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationContext);
  let railsDocsActiveRecordCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCallbacks);
  let railsDocsActiveRecordTasks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTasks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Tasks.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTasks);
  let railsDocsActiveRecordTasksDatabaseTasks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTasksDatabaseTasks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Tasks/DatabaseTasks.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTasksDatabaseTasks);
  let railsDocsActiveRecordCounterCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCounterCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/CounterCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCounterCache);
  let railsDocsActiveRecordAssociationTypeMismatch = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationTypeMismatch', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AssociationTypeMismatch.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationTypeMismatch);
  let railsDocsActiveRecordRelation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRelation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Relation.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRelation);
  let railsDocsActiveRecordRelationRecordFetchWarning = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRelationRecordFetchWarning', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Relation/RecordFetchWarning.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRelationRecordFetchWarning);
  let railsDocsActiveRecordIntegration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordIntegration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Integration.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordIntegration);
  let railsDocsActiveRecordNestedAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNestedAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNestedAttributes);
  let railsDocsActiveRecordCore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Core.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCore);
  let railsDocsActiveRecordCoreInspectionMask = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCoreInspectionMask', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Core/InspectionMask.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCoreInspectionMask);
  let railsDocsActiveRecordCoreClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCoreClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Core/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCoreClassMethods);
  let railsDocsActiveRecordConfigurationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConfigurationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConfigurationError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConfigurationError);
  let railsDocsActiveRecordFixtureSet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordFixtureSet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordFixtureSet);
  let railsDocsActiveRecordType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordType);
  let railsDocsActiveRecordTasks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTasks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Tasks.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTasks);
  let railsDocsActiveRecordTimestamp = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTimestamp', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Timestamp.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTimestamp);
  let railsDocsActiveRecordDelegatedType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDelegatedType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DelegatedType.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDelegatedType);
  let railsDocsActiveRecordNotNullViolation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNotNullViolation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NotNullViolation.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNotNullViolation);
  let railsDocsActiveRecordBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Base.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordBase);
  let railsDocsActiveRecordSignedId = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSignedId', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SignedId.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSignedId);
  let railsDocsActiveRecordSignedIdClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSignedIdClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SignedId/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSignedIdClassMethods);
  let railsDocsActiveRecordDatabaseConfigurations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDatabaseConfigurations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DatabaseConfigurations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDatabaseConfigurations);
  let railsDocsActiveRecordDatabaseConfigurationsUrlConfig = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDatabaseConfigurationsUrlConfig', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DatabaseConfigurations/UrlConfig.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDatabaseConfigurationsUrlConfig);
  let railsDocsActiveRecordDatabaseConfigurationsHashConfig = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDatabaseConfigurationsHashConfig', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DatabaseConfigurations/HashConfig.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDatabaseConfigurationsHashConfig);
  let railsDocsActiveRecordDatabaseConfigurationsInvalidConfigurationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDatabaseConfigurationsInvalidConfigurationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DatabaseConfigurations/InvalidConfigurationError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDatabaseConfigurationsInvalidConfigurationError);
  let railsDocsActiveRecordHasManyThroughAssociationNotFoundError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordHasManyThroughAssociationNotFoundError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/HasManyThroughAssociationNotFoundError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordHasManyThroughAssociationNotFoundError);
  let railsDocsActiveRecordHasManyThroughAssociationNotFoundErrorCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordHasManyThroughAssociationNotFoundErrorCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/HasManyThroughAssociationNotFoundError/Correction.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordHasManyThroughAssociationNotFoundErrorCorrection);
  let railsDocsActiveRecordReflection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReflection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Reflection.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReflection);
  let railsDocsActiveRecordExclusiveConnectionTimeoutError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordExclusiveConnectionTimeoutError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ExclusiveConnectionTimeoutError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordExclusiveConnectionTimeoutError);
  let railsDocsActiveRecordCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCallbacks);
  let railsDocsActiveRecordCallbacksClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCallbacksClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Callbacks/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCallbacksClassMethods);
  let railsDocsActiveRecordUnknownPrimaryKey = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordUnknownPrimaryKey', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/UnknownPrimaryKey.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordUnknownPrimaryKey);
  let railsDocsActiveRecordSignedId = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSignedId', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SignedId.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSignedId);
  let railsDocsActiveRecordConnectionNotEstablished = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionNotEstablished', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionNotEstablished.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionNotEstablished);
  let railsDocsActiveRecordSchema = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSchema', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Schema.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSchema);
  let railsDocsActiveRecordAttributeAssignment = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeAssignment', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeAssignment.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeAssignment);
  let railsDocsActiveRecordRangeError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRangeError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/RangeError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRangeError);
  let railsDocsActiveRecordTransactions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTransactions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Transactions.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTransactions);
  let railsDocsActiveRecordIntegration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordIntegration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Integration.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordIntegration);
  let railsDocsActiveRecordIntegrationClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordIntegrationClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Integration/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordIntegrationClassMethods);
  let railsDocsActiveRecordTransactionIsolationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTransactionIsolationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/TransactionIsolationError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTransactionIsolationError);
  let railsDocsActiveRecordLockWaitTimeout = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLockWaitTimeout', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/LockWaitTimeout.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLockWaitTimeout);
  let railsDocsActiveRecordSerializationTypeMismatch = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSerializationTypeMismatch', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SerializationTypeMismatch.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSerializationTypeMismatch);
  let railsDocsActiveRecordConnectionAdapters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdapters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdapters);
  let railsDocsActiveRecordConnectionAdaptersColumnMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersColumnMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ColumnMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersColumnMethods);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQL);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQL);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLColumnMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLColumnMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/ColumnMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLColumnMethods);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLTypeMetadata = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLTypeMetadata', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/TypeMetadata.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLTypeMetadata);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLSchemaStatements = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLSchemaStatements', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/SchemaStatements.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLSchemaStatements);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLTable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLTable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/Table.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLTable);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLQuoting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLQuoting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/Quoting.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLQuoting);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLAlterTable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLAlterTable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/AlterTable.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLAlterTable);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLDatabaseStatements = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLDatabaseStatements', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/DatabaseStatements.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLDatabaseStatements);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLTableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLTableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLTableDefinition);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLOID = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLOID', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/OID.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLOID);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLOID = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLOID', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/OID.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLOID);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBit = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBit', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/OID/Bit.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBit);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBitData = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBitData', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/OID/Bit/Data.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBitData);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBit = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBit', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQL/OID/Bit.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLOIDBit);
  let railsDocsActiveRecordConnectionAdaptersDatabaseLimits = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersDatabaseLimits', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseLimits.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersDatabaseLimits);
  let railsDocsActiveRecordConnectionAdaptersSchemaStatements = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSchemaStatements', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSchemaStatements);
  let railsDocsActiveRecordConnectionAdaptersQueryCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersQueryCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/QueryCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersQueryCache);
  let railsDocsActiveRecordConnectionAdaptersMysql2Adapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersMysql2Adapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Mysql2Adapter.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersMysql2Adapter);
  let railsDocsActiveRecordConnectionAdaptersConnectionPool = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersConnectionPool', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionPool.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersConnectionPool);
  let railsDocsActiveRecordConnectionAdaptersDeduplicable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersDeduplicable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Deduplicable.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersDeduplicable);
  let railsDocsActiveRecordConnectionAdaptersDeduplicableClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersDeduplicableClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Deduplicable/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersDeduplicableClassMethods);
  let railsDocsActiveRecordConnectionAdaptersTable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersTable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Table.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersTable);
  let railsDocsActiveRecordConnectionAdaptersSqlTypeMetadata = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSqlTypeMetadata', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SqlTypeMetadata.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSqlTypeMetadata);
  let railsDocsActiveRecordConnectionAdaptersSQLite3 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSQLite3', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SQLite3.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSQLite3);
  let railsDocsActiveRecordConnectionAdaptersNullColumn = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersNullColumn', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/NullColumn.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersNullColumn);
  let railsDocsActiveRecordConnectionAdaptersAbstractMysqlAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersAbstractMysqlAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/AbstractMysqlAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersAbstractMysqlAdapter);
  let railsDocsActiveRecordConnectionAdaptersConnectionHandler = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersConnectionHandler', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionHandler.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersConnectionHandler);
  let railsDocsActiveRecordConnectionAdaptersQuoting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersQuoting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Quoting.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersQuoting);
  let railsDocsActiveRecordConnectionAdaptersQueryCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersQueryCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/QueryCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersQueryCache);
  let railsDocsActiveRecordConnectionAdaptersQueryCacheConnectionPoolConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersQueryCacheConnectionPoolConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/QueryCache/ConnectionPoolConfiguration.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersQueryCacheConnectionPoolConfiguration);
  let railsDocsActiveRecordConnectionAdaptersAbstractAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersAbstractAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/AbstractAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersAbstractAdapter);
  let railsDocsActiveRecordConnectionAdaptersColumn = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersColumn', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Column.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersColumn);
  let railsDocsActiveRecordConnectionAdaptersRealTransaction = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersRealTransaction', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/RealTransaction.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersRealTransaction);
  let railsDocsActiveRecordConnectionAdaptersSQLite3 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSQLite3', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SQLite3.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSQLite3);
  let railsDocsActiveRecordConnectionAdaptersSQLite3DatabaseStatements = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSQLite3DatabaseStatements', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SQLite3/DatabaseStatements.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSQLite3DatabaseStatements);
  let railsDocsActiveRecordConnectionAdaptersSQLite3TableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSQLite3TableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SQLite3/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSQLite3TableDefinition);
  let railsDocsActiveRecordConnectionAdaptersMySQL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersMySQL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/MySQL.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersMySQL);
  let railsDocsActiveRecordConnectionAdaptersMySQLColumnMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersMySQLColumnMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/MySQL/ColumnMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersMySQLColumnMethods);
  let railsDocsActiveRecordConnectionAdaptersMySQLTable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersMySQLTable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/MySQL/Table.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersMySQLTable);
  let railsDocsActiveRecordConnectionAdaptersMySQLDatabaseStatements = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersMySQLDatabaseStatements', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/MySQL/DatabaseStatements.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersMySQLDatabaseStatements);
  let railsDocsActiveRecordConnectionAdaptersMySQLTableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersMySQLTableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/MySQL/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersMySQLTableDefinition);
  let railsDocsActiveRecordConnectionAdaptersMySQL = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersMySQL', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/MySQL.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersMySQL);
  let railsDocsActiveRecordConnectionAdaptersConnectionPool = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersConnectionPool', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionPool.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersConnectionPool);
  let railsDocsActiveRecordConnectionAdaptersConnectionPoolQueue = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersConnectionPoolQueue', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionPool/Queue.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersConnectionPoolQueue);
  let railsDocsActiveRecordConnectionAdaptersConnectionPoolReaper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersConnectionPoolReaper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionPool/Reaper.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersConnectionPoolReaper);
  let railsDocsActiveRecordConnectionAdaptersDatabaseStatements = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersDatabaseStatements', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseStatements.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersDatabaseStatements);
  let railsDocsActiveRecordConnectionAdaptersSchemaCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSchemaCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SchemaCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSchemaCache);
  let railsDocsActiveRecordConnectionAdaptersTransactionState = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersTransactionState', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/TransactionState.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersTransactionState);
  let railsDocsActiveRecordConnectionAdaptersTableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersTableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersTableDefinition);
  let railsDocsActiveRecordConnectionAdaptersSavepointTransaction = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSavepointTransaction', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SavepointTransaction.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSavepointTransaction);
  let railsDocsActiveRecordConnectionAdaptersAbstractAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersAbstractAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/AbstractAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersAbstractAdapter);
  let railsDocsActiveRecordConnectionAdaptersAbstractAdapterVersion = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersAbstractAdapterVersion', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/AbstractAdapter/Version.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersAbstractAdapterVersion);
  let railsDocsActiveRecordConnectionAdaptersPostgreSQLAdapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersPostgreSQLAdapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQLAdapter.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersPostgreSQLAdapter);
  let railsDocsActiveRecordConnectionAdaptersSavepoints = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSavepoints', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Savepoints.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSavepoints);
  let railsDocsActiveRecordConnectionAdaptersSQLite3Adapter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersSQLite3Adapter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SQLite3Adapter.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersSQLite3Adapter);
  let railsDocsActiveRecordConnectionAdaptersDeduplicable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdaptersDeduplicable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Deduplicable.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdaptersDeduplicable);
  let railsDocsActiveRecordEnvironmentMismatchError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEnvironmentMismatchError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/EnvironmentMismatchError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEnvironmentMismatchError);
  let railsDocsActiveRecordLocking = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLocking', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Locking.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLocking);
  let railsDocsActiveRecordLockingOptimistic = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLockingOptimistic', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Locking/Optimistic.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLockingOptimistic);
  let railsDocsActiveRecordLockingOptimisticClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLockingOptimisticClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Locking/Optimistic/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLockingOptimisticClassMethods);
  let railsDocsActiveRecordLockingPessimistic = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLockingPessimistic', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Locking/Pessimistic.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLockingPessimistic);
  let railsDocsActiveRecordLockingOptimistic = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLockingOptimistic', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Locking/Optimistic.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLockingOptimistic);
  let railsDocsActiveRecordTranslation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTranslation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Translation.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTranslation);
  let railsDocsActiveRecordValueTooLong = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordValueTooLong', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ValueTooLong.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordValueTooLong);
  let railsDocsActiveRecordMiddleware = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMiddleware', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Middleware.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMiddleware);
  let railsDocsActiveRecordAssociationNotFoundError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationNotFoundError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AssociationNotFoundError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationNotFoundError);
  let railsDocsActiveRecordAssociationNotFoundErrorCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociationNotFoundErrorCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AssociationNotFoundError/Correction.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociationNotFoundErrorCorrection);
  let railsDocsActiveRecordAttributeMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethods);
  let railsDocsActiveRecordAttributeMethodsRead = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsRead', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Read.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsRead);
  let railsDocsActiveRecordAttributeMethodsSerialization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsSerialization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Serialization.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsSerialization);
  let railsDocsActiveRecordAttributeMethodsDirty = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsDirty', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Dirty.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsDirty);
  let railsDocsActiveRecordAttributeMethodsPrimaryKey = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsPrimaryKey', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/PrimaryKey.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsPrimaryKey);
  let railsDocsActiveRecordAttributeMethodsTimeZoneConversion = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsTimeZoneConversion', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/TimeZoneConversion.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsTimeZoneConversion);
  let railsDocsActiveRecordAttributeMethodsSerialization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsSerialization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Serialization.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsSerialization);
  let railsDocsActiveRecordAttributeMethodsSerializationClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsSerializationClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Serialization/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsSerializationClassMethods);
  let railsDocsActiveRecordAttributeMethodsSerializationColumnNotSerializableError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsSerializationColumnNotSerializableError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Serialization/ColumnNotSerializableError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsSerializationColumnNotSerializableError);
  let railsDocsActiveRecordAttributeMethodsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsClassMethods);
  let railsDocsActiveRecordAttributeMethodsQuery = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsQuery', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Query.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsQuery);
  let railsDocsActiveRecordAttributeMethodsPrimaryKey = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsPrimaryKey', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/PrimaryKey.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsPrimaryKey);
  let railsDocsActiveRecordAttributeMethodsPrimaryKeyClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsPrimaryKeyClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/PrimaryKey/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsPrimaryKeyClassMethods);
  let railsDocsActiveRecordAttributeMethodsWrite = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsWrite', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Write.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsWrite);
  let railsDocsActiveRecordAttributeMethodsBeforeTypeCast = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethodsBeforeTypeCast', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods/BeforeTypeCast.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethodsBeforeTypeCast);
  let railsDocsActiveRecordInvalidForeignKey = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordInvalidForeignKey', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/InvalidForeignKey.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordInvalidForeignKey);
  let railsDocsActiveRecordDestroyAssociationAsyncJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDestroyAssociationAsyncJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DestroyAssociationAsyncJob.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDestroyAssociationAsyncJob);
  let railsDocsActiveRecordRecordNotSaved = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRecordNotSaved', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/RecordNotSaved.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRecordNotSaved);
  let railsDocsActiveRecordEncryption = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEncryption', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Encryption.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEncryption);
  let railsDocsActiveRecordScoping = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScoping', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScoping);
  let railsDocsActiveRecordScopingDefault = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScopingDefault', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping/Default.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScopingDefault);
  let railsDocsActiveRecordScopingDefault = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScopingDefault', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping/Default.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScopingDefault);
  let railsDocsActiveRecordScopingDefaultClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScopingDefaultClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping/Default/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScopingDefaultClassMethods);
  let railsDocsActiveRecordScopingNamed = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScopingNamed', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping/Named.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScopingNamed);
  let railsDocsActiveRecordScopingNamed = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScopingNamed', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping/Named.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScopingNamed);
  let railsDocsActiveRecordScopingNamedClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScopingNamedClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping/Named/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScopingNamedClassMethods);
  let railsDocsActiveRecordNoTouching = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNoTouching', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NoTouching.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNoTouching);
  let railsDocsActiveRecordNoTouchingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNoTouchingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NoTouching/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNoTouchingClassMethods);
  let railsDocsActiveRecordCore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Core.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCore);
  let railsDocsActiveRecordTestFixtures = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTestFixtures', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/TestFixtures.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTestFixtures);
  let railsDocsActiveRecordTestFixturesClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTestFixturesClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/TestFixtures/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTestFixturesClassMethods);
  let railsDocsActiveRecordQueryMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryMethods);
  let railsDocsActiveRecordActiveRecordError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordActiveRecordError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ActiveRecordError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordActiveRecordError);
  let railsDocsActiveRecordBatches = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordBatches', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Batches.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordBatches);
  let railsDocsActiveRecordValidations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordValidations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Validations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordValidations);
  let railsDocsActiveRecordConnectionAdapters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionAdapters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionAdapters);
  let railsDocsActiveRecordDestroyAssociationAsyncError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDestroyAssociationAsyncError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DestroyAssociationAsyncError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDestroyAssociationAsyncError);
  let railsDocsActiveRecordStatementInvalid = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStatementInvalid', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/StatementInvalid.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStatementInvalid);
  let railsDocsActiveRecordNoTouching = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNoTouching', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NoTouching.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNoTouching);
  let railsDocsActiveRecordStaleObjectError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStaleObjectError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/StaleObjectError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStaleObjectError);
  let railsDocsActiveRecordReadOnlyRecord = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReadOnlyRecord', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ReadOnlyRecord.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReadOnlyRecord);
  let railsDocsActiveRecordReadonlyAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReadonlyAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ReadonlyAttributes.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReadonlyAttributes);
  let railsDocsActiveRecordReadonlyAttributesClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReadonlyAttributesClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ReadonlyAttributes/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReadonlyAttributesClassMethods);
  let railsDocsActiveRecordInverseOfAssociationNotFoundError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordInverseOfAssociationNotFoundError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/InverseOfAssociationNotFoundError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordInverseOfAssociationNotFoundError);
  let railsDocsActiveRecordConnectionHandling = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionHandling', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionHandling.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionHandling);
  let railsDocsActiveRecordAsynchronousQueryInsideTransactionError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAsynchronousQueryInsideTransactionError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AsynchronousQueryInsideTransactionError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAsynchronousQueryInsideTransactionError);
  let railsDocsActiveRecordValidations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordValidations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Validations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordValidations);
  let railsDocsActiveRecordValidationsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordValidationsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Validations/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordValidationsClassMethods);
  let railsDocsActiveRecordAssociations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAssociations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Associations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAssociations);
  let railsDocsActiveRecordInheritance = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordInheritance', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Inheritance.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordInheritance);
  let railsDocsActiveRecordPreparedStatementInvalid = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordPreparedStatementInvalid', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/PreparedStatementInvalid.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordPreparedStatementInvalid);
  let railsDocsActiveRecordRollback = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRollback', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Rollback.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRollback);
  let railsDocsActiveRecordUnknownAttributeReference = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordUnknownAttributeReference', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/UnknownAttributeReference.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordUnknownAttributeReference);
  let railsDocsActiveRecordAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Attributes.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributes);
  let railsDocsActiveRecordAttributesClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributesClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Attributes/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributesClassMethods);
  let railsDocsActiveRecordCalculations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCalculations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCalculations);
  let railsDocsActiveRecordReadonlyAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReadonlyAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ReadonlyAttributes.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReadonlyAttributes);
  let railsDocsActiveRecordSpawnMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSpawnMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SpawnMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSpawnMethods);
  let railsDocsActiveRecordTransactions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTransactions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Transactions.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTransactions);
  let railsDocsActiveRecordTransactionsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTransactionsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Transactions/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTransactionsClassMethods);
  let railsDocsActiveRecordQueryCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryCache);
  let railsDocsActiveRecordQueryCacheClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryCacheClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryCache/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryCacheClassMethods);
  let railsDocsActiveRecordAttributeAssignmentError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeAssignmentError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeAssignmentError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeAssignmentError);
  let railsDocsActiveRecordAdapterTimeout = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAdapterTimeout', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AdapterTimeout.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAdapterTimeout);
  let railsDocsActiveRecordQueryCanceled = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryCanceled', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryCanceled.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryCanceled);
  let railsDocsActiveRecordSerializationFailure = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSerializationFailure', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SerializationFailure.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSerializationFailure);
  let railsDocsActiveRecordType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordType);
  let railsDocsActiveRecordTypeInternal = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTypeInternal', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type/Internal.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTypeInternal);
  let railsDocsActiveRecordTypeJson = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTypeJson', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type/Json.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTypeJson);
  let railsDocsActiveRecordTypeInternal = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTypeInternal', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type/Internal.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTypeInternal);
  let railsDocsActiveRecordTypeInternalTimezone = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTypeInternalTimezone', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type/Internal/Timezone.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTypeInternalTimezone);
  let railsDocsActiveRecordTypeTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTypeTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type/Time.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTypeTime);
  let railsDocsActiveRecordTypeDateTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTypeDateTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type/DateTime.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTypeDateTime);
  let railsDocsActiveRecordTypeDate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTypeDate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Type/Date.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTypeDate);
  let railsDocsActiveRecordInheritance = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordInheritance', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Inheritance.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordInheritance);
  let railsDocsActiveRecordInheritanceClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordInheritanceClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Inheritance/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordInheritanceClassMethods);
  let railsDocsActiveRecordSecureToken = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSecureToken', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SecureToken.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSecureToken);
  let railsDocsActiveRecordSecureTokenClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSecureTokenClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SecureToken/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSecureTokenClassMethods);
  let railsDocsActiveRecordSecureTokenMinimumLengthError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSecureTokenMinimumLengthError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SecureToken/MinimumLengthError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSecureTokenMinimumLengthError);
  let railsDocsActiveRecordFinderMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordFinderMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/FinderMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordFinderMethods);
  let railsDocsActiveRecordEnum = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEnum', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Enum.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEnum);
  let railsDocsActiveRecordDynamicMatchers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDynamicMatchers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DynamicMatchers.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDynamicMatchers);
  let railsDocsActiveRecordRecordNotDestroyed = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRecordNotDestroyed', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/RecordNotDestroyed.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRecordNotDestroyed);
  let railsDocsActiveRecordStatementTimeout = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStatementTimeout', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/StatementTimeout.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStatementTimeout);
  let railsDocsActiveRecordTransactionRollbackError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTransactionRollbackError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/TransactionRollbackError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTransactionRollbackError);
  let railsDocsActiveRecordPersistence = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordPersistence', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Persistence.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordPersistence);
  let railsDocsActiveRecordPersistenceClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordPersistenceClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Persistence/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordPersistenceClassMethods);
  let railsDocsActiveRecordAutosaveAssociation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAutosaveAssociation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AutosaveAssociation.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAutosaveAssociation);
  let railsDocsActiveRecordMigration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigration);
  let railsDocsActiveRecordPreparedStatementCacheExpired = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordPreparedStatementCacheExpired', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/PreparedStatementCacheExpired.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordPreparedStatementCacheExpired);
  let railsDocsActiveRecordCounterCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCounterCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/CounterCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCounterCache);
  let railsDocsActiveRecordCounterCacheClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordCounterCacheClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/CounterCache/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordCounterCacheClassMethods);
  let railsDocsActiveRecordQuerying = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQuerying', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Querying.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQuerying);
  let railsDocsActiveRecordMismatchedForeignKey = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMismatchedForeignKey', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/MismatchedForeignKey.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMismatchedForeignKey);
  let railsDocsActiveRecordAdapterNotFound = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAdapterNotFound', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AdapterNotFound.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAdapterNotFound);
  let railsDocsActiveRecordActiveJobRequiredError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordActiveJobRequiredError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ActiveJobRequiredError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordActiveJobRequiredError);
  let railsDocsActiveRecordSecureToken = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSecureToken', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SecureToken.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSecureToken);
  let railsDocsActiveRecordRecordInvalid = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRecordInvalid', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/RecordInvalid.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRecordInvalid);
  let railsDocsActiveRecordExplain = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordExplain', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Explain.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordExplain);
  let railsDocsActiveRecordFixtureSet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordFixtureSet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordFixtureSet);
  let railsDocsActiveRecordFixtureSetClassCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordFixtureSetClassCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet/ClassCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordFixtureSetClassCache);
  let railsDocsActiveRecordDangerousAttributeError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDangerousAttributeError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DangerousAttributeError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDangerousAttributeError);
  let railsDocsActiveRecordAdapterNotSpecified = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAdapterNotSpecified', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AdapterNotSpecified.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAdapterNotSpecified);
  let railsDocsActiveRecordModelSchema = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordModelSchema', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ModelSchema.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordModelSchema);
  let railsDocsActiveRecordModelSchemaClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordModelSchemaClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ModelSchema/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordModelSchemaClassMethods);
  let railsDocsActiveRecordAggregations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAggregations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Aggregations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAggregations);
  let railsDocsActiveRecordModelSchema = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordModelSchema', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ModelSchema.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordModelSchema);
  let railsDocsActiveRecordLocking = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordLocking', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Locking.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordLocking);
  let railsDocsActiveRecordStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Store.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStore);
  let railsDocsActiveRecordRecordNotUnique = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRecordNotUnique', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/RecordNotUnique.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRecordNotUnique);
  let railsDocsActiveRecordDeadlocked = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDeadlocked', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Deadlocked.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDeadlocked);
  let railsDocsActiveRecordScoping = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordScoping', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Scoping.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordScoping);
  let railsDocsActiveRecordNestedAttributes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNestedAttributes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNestedAttributes);
  let railsDocsActiveRecordNestedAttributesTooManyRecords = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNestedAttributesTooManyRecords', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes/TooManyRecords.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNestedAttributesTooManyRecords);
  let railsDocsActiveRecordNestedAttributesClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNestedAttributesClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNestedAttributesClassMethods);
  let railsDocsActiveRecordQueryAborted = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryAborted', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryAborted.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryAborted);
  let railsDocsActiveRecordDynamicMatchers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDynamicMatchers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DynamicMatchers.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDynamicMatchers);
  let railsDocsActiveRecordDynamicMatchersMethod = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDynamicMatchersMethod', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DynamicMatchers/Method.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDynamicMatchersMethod);
  let railsDocsActiveRecordDynamicMatchersFindByBang = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDynamicMatchersFindByBang', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DynamicMatchers/FindByBang.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDynamicMatchersFindByBang);
  let railsDocsActiveRecordDynamicMatchersFindBy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordDynamicMatchersFindBy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/DynamicMatchers/FindBy.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordDynamicMatchersFindBy);
  let railsDocsActiveRecordResult = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordResult', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Result.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordResult);
  let railsDocsActiveRecordImmutableRelation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordImmutableRelation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ImmutableRelation.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordImmutableRelation);
  let railsDocsActiveRecordQueryMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryMethods);
  let railsDocsActiveRecordQueryMethodsWhereChain = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordQueryMethodsWhereChain', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/QueryMethods/WhereChain.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordQueryMethodsWhereChain);
  let railsDocsActiveRecordEagerLoadPolymorphicError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordEagerLoadPolymorphicError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/EagerLoadPolymorphicError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordEagerLoadPolymorphicError);
  let railsDocsActiveRecordBatches = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordBatches', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Batches.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordBatches);
  let railsDocsActiveRecordBatchesBatchEnumerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordBatchesBatchEnumerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Batches/BatchEnumerator.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordBatchesBatchEnumerator);
  let railsDocsActiveRecordTestFixtures = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTestFixtures', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/TestFixtures.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTestFixtures);
  let railsDocsActiveRecordSanitization = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSanitization', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Sanitization.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSanitization);
  let railsDocsActiveRecordSanitizationClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSanitizationClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Sanitization/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSanitizationClassMethods);
  let railsDocsActiveRecordRecordNotFound = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRecordNotFound', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/RecordNotFound.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRecordNotFound);
  let railsDocsActiveRecordAggregations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAggregations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Aggregations.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAggregations);
  let railsDocsActiveRecordAggregationsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAggregationsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Aggregations/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAggregationsClassMethods);
  let railsDocsActiveRecordMigration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigration);
  let railsDocsActiveRecordMigrationCompatibility = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibility', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibility);
  let railsDocsActiveRecordMigrationCompatibilityV4_2 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV4_2', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V4_2.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV4_2);
  let railsDocsActiveRecordMigrationCompatibilityV4_2TableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV4_2TableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V4_2/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV4_2TableDefinition);
  let railsDocsActiveRecordMigrationCompatibilityV6_0 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV6_0', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V6_0.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV6_0);
  let railsDocsActiveRecordMigrationCompatibilityV6_0TableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV6_0TableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V6_0/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV6_0TableDefinition);
  let railsDocsActiveRecordMigrationCompatibilityV6_0ReferenceDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV6_0ReferenceDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V6_0/ReferenceDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV6_0ReferenceDefinition);
  let railsDocsActiveRecordMigrationCompatibilityV4_2 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV4_2', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V4_2.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV4_2);
  let railsDocsActiveRecordMigrationCompatibilityV5_1 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_1', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_1.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_1);
  let railsDocsActiveRecordMigrationCompatibilityV5_0 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_0', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_0.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_0);
  let railsDocsActiveRecordMigrationCompatibilityV5_0TableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_0TableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_0/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_0TableDefinition);
  let railsDocsActiveRecordMigrationCompatibilityV5_0 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_0', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_0.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_0);
  let railsDocsActiveRecordMigrationCompatibilityV5_2 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_2', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_2.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_2);
  let railsDocsActiveRecordMigrationCompatibilityV5_2 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_2', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_2.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_2);
  let railsDocsActiveRecordMigrationCompatibilityV5_2CommandRecorder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_2CommandRecorder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_2/CommandRecorder.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_2CommandRecorder);
  let railsDocsActiveRecordMigrationCompatibilityV5_2TableDefinition = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV5_2TableDefinition', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V5_2/TableDefinition.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV5_2TableDefinition);
  let railsDocsActiveRecordMigrationCompatibilityV6_0 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV6_0', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V6_0.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV6_0);
  let railsDocsActiveRecordMigrationCompatibilityV6_1 = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibilityV6_1', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility/V6_1.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibilityV6_1);
  let railsDocsActiveRecordMigrationCommandRecorder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCommandRecorder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/CommandRecorder.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCommandRecorder);
  let railsDocsActiveRecordMigrationCompatibility = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCompatibility', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/Compatibility.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCompatibility);
  let railsDocsActiveRecordMigrationCheckPending = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordMigrationCheckPending', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Migration/CheckPending.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordMigrationCheckPending);
  let railsDocsActiveRecordStatementCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStatementCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/StatementCache.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStatementCache);
  let railsDocsActiveRecordConnectionTimeoutError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordConnectionTimeoutError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/ConnectionTimeoutError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordConnectionTimeoutError);
  let railsDocsActiveRecordVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordVERSION);
  let railsDocsActiveRecordIrreversibleOrderError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordIrreversibleOrderError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/IrreversibleOrderError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordIrreversibleOrderError);
  let railsDocsActiveRecordTableNotSpecified = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordTableNotSpecified', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/TableNotSpecified.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordTableNotSpecified);
  let railsDocsActiveRecordNoDatabaseError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordNoDatabaseError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/NoDatabaseError.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordNoDatabaseError);
  let railsDocsActiveRecordSuppressor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSuppressor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Suppressor.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSuppressor);
  let railsDocsActiveRecordSuppressorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSuppressorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Suppressor/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSuppressorClassMethods);
  let railsDocsActiveRecordWrappedDatabaseException = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordWrappedDatabaseException', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/WrappedDatabaseException.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordWrappedDatabaseException);
  let railsDocsActiveRecordStore = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStore', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Store.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStore);
  let railsDocsActiveRecordStoreClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordStoreClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Store/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordStoreClassMethods);
  let railsDocsActiveRecordReflection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReflection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Reflection.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReflection);
  let railsDocsActiveRecordReflectionMacroReflection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReflectionMacroReflection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Reflection/MacroReflection.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReflectionMacroReflection);
  let railsDocsActiveRecordReflectionClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordReflectionClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Reflection/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordReflectionClassMethods);
  let railsDocsActiveRecordSoleRecordExceeded = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSoleRecordExceeded', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/SoleRecordExceeded.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSoleRecordExceeded);
  let railsDocsActiveRecordRelation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordRelation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Relation.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordRelation);
  let railsDocsActiveRecordAttributeMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordAttributeMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/AttributeMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordAttributeMethods);
  let railsDocsActiveRecordSuppressor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecordSuppressor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord/Suppressor.html'));
  })
  context.subscriptions.push(railsDocsActiveRecordSuppressor);
  let railsDocsURI = vscode.commands.registerCommand('vscode-rails-docs.railsDocsURI', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/URI.html'));
  })
  context.subscriptions.push(railsDocsURI);
  let railsDocsActiveRecord = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveRecord', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveRecord.html'));
  })
  context.subscriptions.push(railsDocsActiveRecord);
  let railsDocsNilClass = vscode.commands.registerCommand('vscode-rails-docs.railsDocsNilClass', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/NilClass.html'));
  })
  context.subscriptions.push(railsDocsNilClass);
  let railsDocsActionView = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionView', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView.html'));
  })
  context.subscriptions.push(railsDocsActionView);
  let railsDocsActionController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController.html'));
  })
  context.subscriptions.push(railsDocsActionController);
  let railsDocsActionControllerRenderers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRenderers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Renderers.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRenderers);
  let railsDocsActionControllerLogSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLogSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/LogSubscriber.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLogSubscriber);
  let railsDocsActionControllerDataStreaming = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerDataStreaming', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/DataStreaming.html'));
  })
  context.subscriptions.push(railsDocsActionControllerDataStreaming);
  let railsDocsActionControllerRenderers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRenderers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Renderers.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRenderers);
  let railsDocsActionControllerRenderersAll = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRenderersAll', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Renderers/All.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRenderersAll);
  let railsDocsActionControllerRenderersClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRenderersClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Renderers/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRenderersClassMethods);
  let railsDocsActionControllerTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionControllerTestCase);
  let railsDocsActionControllerTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionControllerTestCaseBehavior);
  let railsDocsActionControllerTestCaseBehaviorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerTestCaseBehaviorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/TestCase/Behavior/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerTestCaseBehaviorClassMethods);
  let railsDocsActionControllerTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionControllerTestCaseBehavior);
  let railsDocsActionControllerStreaming = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerStreaming', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Streaming.html'));
  })
  context.subscriptions.push(railsDocsActionControllerStreaming);
  let railsDocsActionControllerMimeResponds = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerMimeResponds', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/MimeResponds.html'));
  })
  context.subscriptions.push(railsDocsActionControllerMimeResponds);
  let railsDocsActionControllerMimeRespondsCollector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerMimeRespondsCollector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/MimeResponds/Collector.html'));
  })
  context.subscriptions.push(railsDocsActionControllerMimeRespondsCollector);
  let railsDocsActionControllerMimeResponds = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerMimeResponds', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/MimeResponds.html'));
  })
  context.subscriptions.push(railsDocsActionControllerMimeResponds);
  let railsDocsActionControllerParameterMissing = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParameterMissing', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParameterMissing.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParameterMissing);
  let railsDocsActionControllerParameterMissingCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParameterMissingCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParameterMissing/Correction.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParameterMissingCorrection);
  let railsDocsActionControllerHttpAuthentication = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthentication', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthentication);
  let railsDocsActionControllerHttpAuthenticationBasic = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationBasic', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Basic.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationBasic);
  let railsDocsActionControllerHttpAuthenticationToken = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationToken', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationToken);
  let railsDocsActionControllerHttpAuthenticationTokenControllerMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationTokenControllerMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token/ControllerMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationTokenControllerMethods);
  let railsDocsActionControllerHttpAuthenticationDigest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationDigest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Digest.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationDigest);
  let railsDocsActionControllerHttpAuthenticationDigest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationDigest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Digest.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationDigest);
  let railsDocsActionControllerHttpAuthenticationDigestControllerMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationDigestControllerMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Digest/ControllerMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationDigestControllerMethods);
  let railsDocsActionControllerHttpAuthenticationBasic = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationBasic', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Basic.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationBasic);
  let railsDocsActionControllerHttpAuthenticationBasicControllerMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationBasicControllerMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Basic/ControllerMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationBasicControllerMethods);
  let railsDocsActionControllerHttpAuthenticationBasicControllerMethodsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationBasicControllerMethodsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Basic/ControllerMethods/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationBasicControllerMethodsClassMethods);
  let railsDocsActionControllerHttpAuthenticationBasicControllerMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationBasicControllerMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Basic/ControllerMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationBasicControllerMethods);
  let railsDocsActionControllerHttpAuthenticationToken = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthenticationToken', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthenticationToken);
  let railsDocsActionControllerUnfilteredParameters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerUnfilteredParameters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/UnfilteredParameters.html'));
  })
  context.subscriptions.push(railsDocsActionControllerUnfilteredParameters);
  let railsDocsActionControllerCaching = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerCaching', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Caching.html'));
  })
  context.subscriptions.push(railsDocsActionControllerCaching);
  let railsDocsActionControllerHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHelpers);
  let railsDocsActionControllerUrlGenerationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerUrlGenerationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/UrlGenerationError.html'));
  })
  context.subscriptions.push(railsDocsActionControllerUrlGenerationError);
  let railsDocsActionControllerUrlGenerationErrorCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerUrlGenerationErrorCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/UrlGenerationError/Correction.html'));
  })
  context.subscriptions.push(railsDocsActionControllerUrlGenerationErrorCorrection);
  let railsDocsActionControllerContentSecurityPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerContentSecurityPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ContentSecurityPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionControllerContentSecurityPolicy);
  let railsDocsActionControllerContentSecurityPolicyClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerContentSecurityPolicyClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ContentSecurityPolicy/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerContentSecurityPolicyClassMethods);
  let railsDocsActionControllerBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Base.html'));
  })
  context.subscriptions.push(railsDocsActionControllerBase);
  let railsDocsActionControllerParamsWrapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParamsWrapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParamsWrapper.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParamsWrapper);
  let railsDocsActionControllerParamsWrapperOptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParamsWrapperOptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParamsWrapper/Options.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParamsWrapperOptions);
  let railsDocsActionControllerParamsWrapperOptionsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParamsWrapperOptionsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParamsWrapper/Options/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParamsWrapperOptionsClassMethods);
  let railsDocsActionControllerParamsWrapperOptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParamsWrapperOptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParamsWrapper/Options.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParamsWrapperOptions);
  let railsDocsActionControllerStrongParameters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerStrongParameters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/StrongParameters.html'));
  })
  context.subscriptions.push(railsDocsActionControllerStrongParameters);
  let railsDocsActionControllerRendering = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRendering', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Rendering.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRendering);
  let railsDocsActionControllerHttpAuthentication = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHttpAuthentication', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/HttpAuthentication.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHttpAuthentication);
  let railsDocsActionControllerRespondToMismatchError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRespondToMismatchError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RespondToMismatchError.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRespondToMismatchError);
  let railsDocsActionControllerPermissionsPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerPermissionsPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/PermissionsPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionControllerPermissionsPolicy);
  let railsDocsActionControllerRailties = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRailties', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Railties.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRailties);
  let railsDocsActionControllerRailtiesHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRailtiesHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Railties/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRailtiesHelpers);
  let railsDocsActionControllerCookies = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerCookies', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Cookies.html'));
  })
  context.subscriptions.push(railsDocsActionControllerCookies);
  let railsDocsActionControllerMissingRenderer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerMissingRenderer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/MissingRenderer.html'));
  })
  context.subscriptions.push(railsDocsActionControllerMissingRenderer);
  let railsDocsActionControllerDefaultHeaders = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerDefaultHeaders', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/DefaultHeaders.html'));
  })
  context.subscriptions.push(railsDocsActionControllerDefaultHeaders);
  let railsDocsActionControllerDefaultHeadersClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerDefaultHeadersClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/DefaultHeaders/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerDefaultHeadersClassMethods);
  let railsDocsActionControllerDefaultHeaders = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerDefaultHeaders', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/DefaultHeaders.html'));
  })
  context.subscriptions.push(railsDocsActionControllerDefaultHeaders);
  let railsDocsActionControllerRescue = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRescue', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Rescue.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRescue);
  let railsDocsActionControllerUrlGenerationError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerUrlGenerationError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/UrlGenerationError.html'));
  })
  context.subscriptions.push(railsDocsActionControllerUrlGenerationError);
  let railsDocsActionControllerEtagWithFlash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerEtagWithFlash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/EtagWithFlash.html'));
  })
  context.subscriptions.push(railsDocsActionControllerEtagWithFlash);
  let railsDocsActionControllerConditionalGet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerConditionalGet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ConditionalGet.html'));
  })
  context.subscriptions.push(railsDocsActionControllerConditionalGet);
  let railsDocsActionControllerParamsWrapper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParamsWrapper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParamsWrapper.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParamsWrapper);
  let railsDocsActionControllerApiRendering = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerApiRendering', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ApiRendering.html'));
  })
  context.subscriptions.push(railsDocsActionControllerApiRendering);
  let railsDocsActionControllerInstrumentation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerInstrumentation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Instrumentation.html'));
  })
  context.subscriptions.push(railsDocsActionControllerInstrumentation);
  let railsDocsActionControllerFlash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerFlash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Flash.html'));
  })
  context.subscriptions.push(railsDocsActionControllerFlash);
  let railsDocsActionControllerFormBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerFormBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/FormBuilder.html'));
  })
  context.subscriptions.push(railsDocsActionControllerFormBuilder);
  let railsDocsActionControllerFormBuilderClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerFormBuilderClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/FormBuilder/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerFormBuilderClassMethods);
  let railsDocsActionControllerInstrumentation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerInstrumentation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Instrumentation.html'));
  })
  context.subscriptions.push(railsDocsActionControllerInstrumentation);
  let railsDocsActionControllerInstrumentationClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerInstrumentationClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Instrumentation/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerInstrumentationClassMethods);
  let railsDocsActionControllerFormBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerFormBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/FormBuilder.html'));
  })
  context.subscriptions.push(railsDocsActionControllerFormBuilder);
  let railsDocsActionControllerFlash = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerFlash', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Flash.html'));
  })
  context.subscriptions.push(railsDocsActionControllerFlash);
  let railsDocsActionControllerFlashClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerFlashClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Flash/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerFlashClassMethods);
  let railsDocsActionControllerContentSecurityPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerContentSecurityPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ContentSecurityPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionControllerContentSecurityPolicy);
  let railsDocsActionControllerRequestForgeryProtection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtection);
  let railsDocsActionControllerUnpermittedParameters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerUnpermittedParameters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/UnpermittedParameters.html'));
  })
  context.subscriptions.push(railsDocsActionControllerUnpermittedParameters);
  let railsDocsActionControllerRailties = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRailties', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Railties.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRailties);
  let railsDocsActionControllerImplicitRender = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerImplicitRender', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ImplicitRender.html'));
  })
  context.subscriptions.push(railsDocsActionControllerImplicitRender);
  let railsDocsActionControllerRequestForgeryProtection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtection);
  let railsDocsActionControllerRequestForgeryProtectionProtectionMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtectionProtectionMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection/ProtectionMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtectionProtectionMethods);
  let railsDocsActionControllerRequestForgeryProtectionProtectionMethodsException = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtectionProtectionMethodsException', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection/ProtectionMethods/Exception.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtectionProtectionMethodsException);
  let railsDocsActionControllerRequestForgeryProtectionProtectionMethodsNullSession = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtectionProtectionMethodsNullSession', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection/ProtectionMethods/NullSession.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtectionProtectionMethodsNullSession);
  let railsDocsActionControllerRequestForgeryProtectionProtectionMethodsResetSession = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtectionProtectionMethodsResetSession', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection/ProtectionMethods/ResetSession.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtectionProtectionMethodsResetSession);
  let railsDocsActionControllerRequestForgeryProtectionClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtectionClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtectionClassMethods);
  let railsDocsActionControllerRequestForgeryProtectionProtectionMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRequestForgeryProtectionProtectionMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection/ProtectionMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRequestForgeryProtectionProtectionMethods);
  let railsDocsActionControllerParameterEncoding = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParameterEncoding', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParameterEncoding.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParameterEncoding);
  let railsDocsActionControllerLive = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLive', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Live.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLive);
  let railsDocsActionControllerLiveClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLiveClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Live/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLiveClassMethods);
  let railsDocsActionControllerLiveSSE = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLiveSSE', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Live/SSE.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLiveSSE);
  let railsDocsActionControllerLiveClientDisconnected = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLiveClientDisconnected', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Live/ClientDisconnected.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLiveClientDisconnected);
  let railsDocsActionControllerRenderer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRenderer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Renderer.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRenderer);
  let railsDocsActionControllerUrlFor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerUrlFor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/UrlFor.html'));
  })
  context.subscriptions.push(railsDocsActionControllerUrlFor);
  let railsDocsActionControllerLive = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLive', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Live.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLive);
  let railsDocsActionControllerHead = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHead', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Head.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHead);
  let railsDocsActionControllerEtagWithTemplateDigest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerEtagWithTemplateDigest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/EtagWithTemplateDigest.html'));
  })
  context.subscriptions.push(railsDocsActionControllerEtagWithTemplateDigest);
  let railsDocsActionControllerParameterEncoding = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParameterEncoding', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParameterEncoding.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParameterEncoding);
  let railsDocsActionControllerParameterEncodingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParameterEncodingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParameterEncoding/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParameterEncodingClassMethods);
  let railsDocsActionControllerRendering = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRendering', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Rendering.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRendering);
  let railsDocsActionControllerRenderingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRenderingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Rendering/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRenderingClassMethods);
  let railsDocsActionControllerConditionalGet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerConditionalGet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ConditionalGet.html'));
  })
  context.subscriptions.push(railsDocsActionControllerConditionalGet);
  let railsDocsActionControllerConditionalGetClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerConditionalGetClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ConditionalGet/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerConditionalGetClassMethods);
  let railsDocsActionControllerAPI = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerAPI', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/API.html'));
  })
  context.subscriptions.push(railsDocsActionControllerAPI);
  let railsDocsActionControllerParameters = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParameters', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Parameters.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParameters);
  let railsDocsActionControllerTesting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerTesting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Testing.html'));
  })
  context.subscriptions.push(railsDocsActionControllerTesting);
  let railsDocsActionControllerParameterMissing = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerParameterMissing', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/ParameterMissing.html'));
  })
  context.subscriptions.push(railsDocsActionControllerParameterMissing);
  let railsDocsActionControllerRedirecting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerRedirecting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Redirecting.html'));
  })
  context.subscriptions.push(railsDocsActionControllerRedirecting);
  let railsDocsActionControllerMetal = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerMetal', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Metal.html'));
  })
  context.subscriptions.push(railsDocsActionControllerMetal);
  let railsDocsActionControllerTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionControllerTestCase);
  let railsDocsActionControllerHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHelpers);
  let railsDocsActionControllerHelpersClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerHelpersClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Helpers/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerHelpersClassMethods);
  let railsDocsActionControllerLogging = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLogging', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Logging.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLogging);
  let railsDocsActionControllerLoggingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLoggingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Logging/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLoggingClassMethods);
  let railsDocsActionControllerLiveTestResponse = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLiveTestResponse', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/LiveTestResponse.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLiveTestResponse);
  let railsDocsActionControllerLogging = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerLogging', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/Logging.html'));
  })
  context.subscriptions.push(railsDocsActionControllerLogging);
  let railsDocsActionControllerPermissionsPolicy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerPermissionsPolicy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/PermissionsPolicy.html'));
  })
  context.subscriptions.push(railsDocsActionControllerPermissionsPolicy);
  let railsDocsActionControllerPermissionsPolicyClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionControllerPermissionsPolicyClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController/PermissionsPolicy/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionControllerPermissionsPolicyClassMethods);
  let railsDocsActionView = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionView', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView.html'));
  })
  context.subscriptions.push(railsDocsActionView);
  let railsDocsActionViewLogSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLogSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/LogSubscriber.html'));
  })
  context.subscriptions.push(railsDocsActionViewLogSubscriber);
  let railsDocsActionViewMissingTemplate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewMissingTemplate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/MissingTemplate.html'));
  })
  context.subscriptions.push(railsDocsActionViewMissingTemplate);
  let railsDocsActionViewCacheExpiry = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewCacheExpiry', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/CacheExpiry.html'));
  })
  context.subscriptions.push(railsDocsActionViewCacheExpiry);
  let railsDocsActionViewCacheExpiryExecutor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewCacheExpiryExecutor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/CacheExpiry/Executor.html'));
  })
  context.subscriptions.push(railsDocsActionViewCacheExpiryExecutor);
  let railsDocsActionViewCacheExpiryViewModificationWatcher = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewCacheExpiryViewModificationWatcher', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/CacheExpiry/ViewModificationWatcher.html'));
  })
  context.subscriptions.push(railsDocsActionViewCacheExpiryViewModificationWatcher);
  let railsDocsActionViewTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCase);
  let railsDocsActionViewTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCaseBehavior);
  let railsDocsActionViewTestCaseBehaviorRenderedViewsCollection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCaseBehaviorRenderedViewsCollection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase/Behavior/RenderedViewsCollection.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCaseBehaviorRenderedViewsCollection);
  let railsDocsActionViewTestCaseBehaviorLocals = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCaseBehaviorLocals', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase/Behavior/Locals.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCaseBehaviorLocals);
  let railsDocsActionViewTestCaseBehaviorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCaseBehaviorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase/Behavior/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCaseBehaviorClassMethods);
  let railsDocsActionViewTestCaseTestController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCaseTestController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase/TestController.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCaseTestController);
  let railsDocsActionViewTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCaseBehavior);
  let railsDocsActionViewNullResolver = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewNullResolver', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/NullResolver.html'));
  })
  context.subscriptions.push(railsDocsActionViewNullResolver);
  let railsDocsActionViewRecordIdentifier = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewRecordIdentifier', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/RecordIdentifier.html'));
  })
  context.subscriptions.push(railsDocsActionViewRecordIdentifier);
  let railsDocsActionViewViewPaths = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewViewPaths', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/ViewPaths.html'));
  })
  context.subscriptions.push(railsDocsActionViewViewPaths);
  let railsDocsActionViewHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpers);
  let railsDocsActionViewLayouts = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLayouts', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Layouts.html'));
  })
  context.subscriptions.push(railsDocsActionViewLayouts);
  let railsDocsActionViewLookupContext = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLookupContext', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/LookupContext.html'));
  })
  context.subscriptions.push(railsDocsActionViewLookupContext);
  let railsDocsActionViewLookupContextDetailsCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLookupContextDetailsCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/LookupContext/DetailsCache.html'));
  })
  context.subscriptions.push(railsDocsActionViewLookupContextDetailsCache);
  let railsDocsActionViewLookupContextViewPaths = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLookupContextViewPaths', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/LookupContext/ViewPaths.html'));
  })
  context.subscriptions.push(railsDocsActionViewLookupContextViewPaths);
  let railsDocsActionViewBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Base.html'));
  })
  context.subscriptions.push(railsDocsActionViewBase);
  let railsDocsActionViewResolver = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewResolver', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Resolver.html'));
  })
  context.subscriptions.push(railsDocsActionViewResolver);
  let railsDocsActionViewRendering = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewRendering', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Rendering.html'));
  })
  context.subscriptions.push(railsDocsActionViewRendering);
  let railsDocsActionViewContext = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewContext', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Context.html'));
  })
  context.subscriptions.push(railsDocsActionViewContext);
  let railsDocsActionViewTemplate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplate);
  let railsDocsActionViewTemplateTypes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateTypes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Types.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateTypes);
  let railsDocsActionViewTemplateTypesType = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateTypesType', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Types/Type.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateTypesType);
  let railsDocsActionViewTemplateHandlers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateHandlers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Handlers.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateHandlers);
  let railsDocsActionViewTemplateTypes = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateTypes', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Types.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateTypes);
  let railsDocsActionViewTemplateSources = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateSources', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Sources.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateSources);
  let railsDocsActionViewTemplateSourcesFile = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateSourcesFile', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Sources/File.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateSourcesFile);
  let railsDocsActionViewTemplateHandlers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateHandlers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Handlers.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateHandlers);
  let railsDocsActionViewTemplateHandlersHtml = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateHandlersHtml', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Handlers/Html.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateHandlersHtml);
  let railsDocsActionViewTemplateHandlersBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateHandlersBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Handlers/Builder.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateHandlersBuilder);
  let railsDocsActionViewTemplateHandlersRaw = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateHandlersRaw', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Handlers/Raw.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateHandlersRaw);
  let railsDocsActionViewTemplateHandlersERB = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateHandlersERB', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Handlers/ERB.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateHandlersERB);
  let railsDocsActionViewTemplateSources = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplateSources', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template/Sources.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplateSources);
  let railsDocsActionViewDigestor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewDigestor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Digestor.html'));
  })
  context.subscriptions.push(railsDocsActionViewDigestor);
  let railsDocsActionViewCacheExpiry = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewCacheExpiry', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/CacheExpiry.html'));
  })
  context.subscriptions.push(railsDocsActionViewCacheExpiry);
  let railsDocsActionViewLookupContext = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLookupContext', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/LookupContext.html'));
  })
  context.subscriptions.push(railsDocsActionViewLookupContext);
  let railsDocsActionViewSyntaxErrorInTemplate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewSyntaxErrorInTemplate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/SyntaxErrorInTemplate.html'));
  })
  context.subscriptions.push(railsDocsActionViewSyntaxErrorInTemplate);
  let railsDocsActionViewUnboundTemplate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewUnboundTemplate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/UnboundTemplate.html'));
  })
  context.subscriptions.push(railsDocsActionViewUnboundTemplate);
  let railsDocsActionViewPartialRenderer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewPartialRenderer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/PartialRenderer.html'));
  })
  context.subscriptions.push(railsDocsActionViewPartialRenderer);
  let railsDocsActionViewLayouts = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLayouts', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Layouts.html'));
  })
  context.subscriptions.push(railsDocsActionViewLayouts);
  let railsDocsActionViewLayoutsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewLayoutsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Layouts/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionViewLayoutsClassMethods);
  let railsDocsActionViewRoutingUrlFor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewRoutingUrlFor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/RoutingUrlFor.html'));
  })
  context.subscriptions.push(railsDocsActionViewRoutingUrlFor);
  let railsDocsActionViewRenderer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewRenderer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Renderer.html'));
  })
  context.subscriptions.push(railsDocsActionViewRenderer);
  let railsDocsActionViewDigestor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewDigestor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Digestor.html'));
  })
  context.subscriptions.push(railsDocsActionViewDigestor);
  let railsDocsActionViewDigestorNode = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewDigestorNode', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Digestor/Node.html'));
  })
  context.subscriptions.push(railsDocsActionViewDigestorNode);
  let railsDocsActionViewDigestorPartial = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewDigestorPartial', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Digestor/Partial.html'));
  })
  context.subscriptions.push(railsDocsActionViewDigestorPartial);
  let railsDocsActionViewDigestorInjected = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewDigestorInjected', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Digestor/Injected.html'));
  })
  context.subscriptions.push(railsDocsActionViewDigestorInjected);
  let railsDocsActionViewDigestorMissing = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewDigestorMissing', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Digestor/Missing.html'));
  })
  context.subscriptions.push(railsDocsActionViewDigestorMissing);
  let railsDocsActionViewDigestorNullLogger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewDigestorNullLogger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Digestor/NullLogger.html'));
  })
  context.subscriptions.push(railsDocsActionViewDigestorNullLogger);
  let railsDocsActionViewAbstractRenderer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewAbstractRenderer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/AbstractRenderer.html'));
  })
  context.subscriptions.push(railsDocsActionViewAbstractRenderer);
  let railsDocsActionViewAbstractRendererRenderedCollection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewAbstractRendererRenderedCollection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/AbstractRenderer/RenderedCollection.html'));
  })
  context.subscriptions.push(railsDocsActionViewAbstractRendererRenderedCollection);
  let railsDocsActionViewAbstractRendererRenderedCollection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewAbstractRendererRenderedCollection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/AbstractRenderer/RenderedCollection.html'));
  })
  context.subscriptions.push(railsDocsActionViewAbstractRendererRenderedCollection);
  let railsDocsActionViewAbstractRendererRenderedCollectionEmptyCollection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewAbstractRendererRenderedCollectionEmptyCollection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/AbstractRenderer/RenderedCollection/EmptyCollection.html'));
  })
  context.subscriptions.push(railsDocsActionViewAbstractRendererRenderedCollectionEmptyCollection);
  let railsDocsActionViewRendering = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewRendering', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Rendering.html'));
  })
  context.subscriptions.push(railsDocsActionViewRendering);
  let railsDocsActionViewRenderingClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewRenderingClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Rendering/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionViewRenderingClassMethods);
  let railsDocsActionViewTemplate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTemplate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Template.html'));
  })
  context.subscriptions.push(railsDocsActionViewTemplate);
  let railsDocsActionViewViewPaths = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewViewPaths', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/ViewPaths.html'));
  })
  context.subscriptions.push(railsDocsActionViewViewPaths);
  let railsDocsActionViewViewPathsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewViewPathsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/ViewPaths/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionViewViewPathsClassMethods);
  let railsDocsActionViewFileSystemResolver = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewFileSystemResolver', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/FileSystemResolver.html'));
  })
  context.subscriptions.push(railsDocsActionViewFileSystemResolver);
  let railsDocsActionViewPartialIteration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewPartialIteration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/PartialIteration.html'));
  })
  context.subscriptions.push(railsDocsActionViewPartialIteration);
  let railsDocsActionViewFixtureResolver = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewFixtureResolver', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/FixtureResolver.html'));
  })
  context.subscriptions.push(railsDocsActionViewFixtureResolver);
  let railsDocsActionViewVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActionViewVERSION);
  let railsDocsActionViewTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionViewTestCase);
  let railsDocsActionViewHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpers);
  let railsDocsActionViewHelpersAssetUrlHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersAssetUrlHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/AssetUrlHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersAssetUrlHelper);
  let railsDocsActionViewHelpersRenderingHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersRenderingHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/RenderingHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersRenderingHelper);
  let railsDocsActionViewHelpersActiveModelHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersActiveModelHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/ActiveModelHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersActiveModelHelper);
  let railsDocsActionViewHelpersUrlHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersUrlHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersUrlHelper);
  let railsDocsActionViewHelpersUrlHelperClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersUrlHelperClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersUrlHelperClassMethods);
  let railsDocsActionViewHelpersTags = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersTags', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/Tags.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersTags);
  let railsDocsActionViewHelpersFormTagHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersFormTagHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/FormTagHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersFormTagHelper);
  let railsDocsActionViewHelpersFormOptionsHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersFormOptionsHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/FormOptionsHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersFormOptionsHelper);
  let railsDocsActionViewHelpersDebugHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersDebugHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/DebugHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersDebugHelper);
  let railsDocsActionViewHelpersActiveModelInstanceTag = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersActiveModelInstanceTag', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/ActiveModelInstanceTag.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersActiveModelInstanceTag);
  let railsDocsActionViewHelpersTagHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersTagHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/TagHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersTagHelper);
  let railsDocsActionViewHelpersCsrfHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersCsrfHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/CsrfHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersCsrfHelper);
  let railsDocsActionViewHelpersOutputSafetyHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersOutputSafetyHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/OutputSafetyHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersOutputSafetyHelper);
  let railsDocsActionViewHelpersTags = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersTags', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/Tags.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersTags);
  let railsDocsActionViewHelpersTagsActionText = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersTagsActionText', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/Tags/ActionText.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersTagsActionText);
  let railsDocsActionViewHelpersAtomFeedHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersAtomFeedHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/AtomFeedHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersAtomFeedHelper);
  let railsDocsActionViewHelpersFormBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersFormBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/FormBuilder.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersFormBuilder);
  let railsDocsActionViewHelpersFormHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersFormHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersFormHelper);
  let railsDocsActionViewHelpersDateHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersDateHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/DateHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersDateHelper);
  let railsDocsActionViewHelpersUrlHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersUrlHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersUrlHelper);
  let railsDocsActionViewHelpersTranslationHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersTranslationHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/TranslationHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersTranslationHelper);
  let railsDocsActionViewHelpersCaptureHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersCaptureHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/CaptureHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersCaptureHelper);
  let railsDocsActionViewHelpersJavaScriptHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersJavaScriptHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/JavaScriptHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersJavaScriptHelper);
  let railsDocsActionViewHelpersSanitizeHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersSanitizeHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/SanitizeHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersSanitizeHelper);
  let railsDocsActionViewHelpersCspHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersCspHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/CspHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersCspHelper);
  let railsDocsActionViewHelpersAssetTagHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersAssetTagHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/AssetTagHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersAssetTagHelper);
  let railsDocsActionViewHelpersTextHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersTextHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/TextHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersTextHelper);
  let railsDocsActionViewHelpersNumberHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersNumberHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/NumberHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersNumberHelper);
  let railsDocsActionViewHelpersNumberHelperInvalidNumberError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersNumberHelperInvalidNumberError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/NumberHelper/InvalidNumberError.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersNumberHelperInvalidNumberError);
  let railsDocsActionViewHelpersCacheHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersCacheHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/CacheHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersCacheHelper);
  let railsDocsActionViewHelpersNumberHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewHelpersNumberHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Helpers/NumberHelper.html'));
  })
  context.subscriptions.push(railsDocsActionViewHelpersNumberHelper);
  let railsDocsActionViewResolver = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewResolver', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Resolver.html'));
  })
  context.subscriptions.push(railsDocsActionViewResolver);
  let railsDocsActionViewResolverCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewResolverCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Resolver/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionViewResolverCache);
  let railsDocsActionViewResolverCacheSmallCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewResolverCacheSmallCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Resolver/Cache/SmallCache.html'));
  })
  context.subscriptions.push(railsDocsActionViewResolverCacheSmallCache);
  let railsDocsActionViewResolverCache = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewResolverCache', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Resolver/Cache.html'));
  })
  context.subscriptions.push(railsDocsActionViewResolverCache);
  let railsDocsActionViewResolverPath = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewResolverPath', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/Resolver/Path.html'));
  })
  context.subscriptions.push(railsDocsActionViewResolverPath);
  let railsDocsActionViewAbstractRenderer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewAbstractRenderer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/AbstractRenderer.html'));
  })
  context.subscriptions.push(railsDocsActionViewAbstractRenderer);
  let railsDocsActionViewMissingTemplate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewMissingTemplate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/MissingTemplate.html'));
  })
  context.subscriptions.push(railsDocsActionViewMissingTemplate);
  let railsDocsActionViewMissingTemplateCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewMissingTemplateCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/MissingTemplate/Correction.html'));
  })
  context.subscriptions.push(railsDocsActionViewMissingTemplateCorrection);
  let railsDocsActionViewMissingTemplateCorrectionResults = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewMissingTemplateCorrectionResults', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/MissingTemplate/Correction/Results.html'));
  })
  context.subscriptions.push(railsDocsActionViewMissingTemplateCorrectionResults);
  let railsDocsActionViewMissingTemplateCorrection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionViewMissingTemplateCorrection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionView/MissingTemplate/Correction.html'));
  })
  context.subscriptions.push(railsDocsActionViewMissingTemplateCorrection);
  let railsDocsTrueClass = vscode.commands.registerCommand('vscode-rails-docs.railsDocsTrueClass', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/TrueClass.html'));
  })
  context.subscriptions.push(railsDocsTrueClass);
  let railsDocsMinitest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMinitest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Minitest.html'));
  })
  context.subscriptions.push(railsDocsMinitest);
  let railsDocsMinitestSuppressedSummaryReporter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMinitestSuppressedSummaryReporter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Minitest/SuppressedSummaryReporter.html'));
  })
  context.subscriptions.push(railsDocsMinitestSuppressedSummaryReporter);
  let railsDocsMinitestBacktraceFilterWithFallback = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMinitestBacktraceFilterWithFallback', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Minitest/BacktraceFilterWithFallback.html'));
  })
  context.subscriptions.push(railsDocsMinitestBacktraceFilterWithFallback);
  let railsDocsERB = vscode.commands.registerCommand('vscode-rails-docs.railsDocsERB', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ERB.html'));
  })
  context.subscriptions.push(railsDocsERB);
  let railsDocsERBUtil = vscode.commands.registerCommand('vscode-rails-docs.railsDocsERBUtil', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ERB/Util.html'));
  })
  context.subscriptions.push(railsDocsERBUtil);
  let railsDocsDateTime = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDateTime', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/DateTime.html'));
  })
  context.subscriptions.push(railsDocsDateTime);
  let railsDocsERB = vscode.commands.registerCommand('vscode-rails-docs.railsDocsERB', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ERB.html'));
  })
  context.subscriptions.push(railsDocsERB);
  let railsDocsActionMailer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer.html'));
  })
  context.subscriptions.push(railsDocsActionMailer);
  let railsDocsActionMailerTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/TestHelper.html'));
  })
  context.subscriptions.push(railsDocsActionMailerTestHelper);
  let railsDocsActionMailerLogSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerLogSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/LogSubscriber.html'));
  })
  context.subscriptions.push(railsDocsActionMailerLogSubscriber);
  let railsDocsActionMailerParameterized = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerParameterized', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Parameterized.html'));
  })
  context.subscriptions.push(railsDocsActionMailerParameterized);
  let railsDocsActionMailerParameterizedClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerParameterizedClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Parameterized/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionMailerParameterizedClassMethods);
  let railsDocsActionMailerNonInferrableMailerError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerNonInferrableMailerError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/NonInferrableMailerError.html'));
  })
  context.subscriptions.push(railsDocsActionMailerNonInferrableMailerError);
  let railsDocsActionMailerDeliveryMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerDeliveryMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/DeliveryMethods.html'));
  })
  context.subscriptions.push(railsDocsActionMailerDeliveryMethods);
  let railsDocsActionMailerTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionMailerTestCase);
  let railsDocsActionMailerTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionMailerTestCaseBehavior);
  let railsDocsActionMailerTestCaseBehaviorClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerTestCaseBehaviorClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/TestCase/Behavior/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionMailerTestCaseBehaviorClassMethods);
  let railsDocsActionMailerTestCaseClearTestDeliveries = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerTestCaseClearTestDeliveries', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/TestCase/ClearTestDeliveries.html'));
  })
  context.subscriptions.push(railsDocsActionMailerTestCaseClearTestDeliveries);
  let railsDocsActionMailerTestCaseBehavior = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerTestCaseBehavior', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/TestCase/Behavior.html'));
  })
  context.subscriptions.push(railsDocsActionMailerTestCaseBehavior);
  let railsDocsActionMailerPreview = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerPreview', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Preview.html'));
  })
  context.subscriptions.push(railsDocsActionMailerPreview);
  let railsDocsActionMailerParameterized = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerParameterized', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Parameterized.html'));
  })
  context.subscriptions.push(railsDocsActionMailerParameterized);
  let railsDocsActionMailerBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Base.html'));
  })
  context.subscriptions.push(railsDocsActionMailerBase);
  let railsDocsActionMailerMessageDelivery = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerMessageDelivery', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/MessageDelivery.html'));
  })
  context.subscriptions.push(railsDocsActionMailerMessageDelivery);
  let railsDocsActionMailerCollector = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerCollector', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Collector.html'));
  })
  context.subscriptions.push(railsDocsActionMailerCollector);
  let railsDocsActionMailerPreviews = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerPreviews', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Previews.html'));
  })
  context.subscriptions.push(railsDocsActionMailerPreviews);
  let railsDocsActionMailerRescuable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerRescuable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Rescuable.html'));
  })
  context.subscriptions.push(railsDocsActionMailerRescuable);
  let railsDocsActionMailerMailHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerMailHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/MailHelper.html'));
  })
  context.subscriptions.push(railsDocsActionMailerMailHelper);
  let railsDocsActionMailerDeliveryMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerDeliveryMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/DeliveryMethods.html'));
  })
  context.subscriptions.push(railsDocsActionMailerDeliveryMethods);
  let railsDocsActionMailerDeliveryMethodsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerDeliveryMethodsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/DeliveryMethods/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionMailerDeliveryMethodsClassMethods);
  let railsDocsActionMailerPreviews = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerPreviews', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Previews.html'));
  })
  context.subscriptions.push(railsDocsActionMailerPreviews);
  let railsDocsActionMailerPreviewsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerPreviewsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Previews/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActionMailerPreviewsClassMethods);
  let railsDocsActionMailerVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActionMailerVERSION);
  let railsDocsActionMailerTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionMailerTestCase);
  let railsDocsActionMailerBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Base.html'));
  })
  context.subscriptions.push(railsDocsActionMailerBase);
  let railsDocsActionMailerBaseLateAttachmentsProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerBaseLateAttachmentsProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/Base/LateAttachmentsProxy.html'));
  })
  context.subscriptions.push(railsDocsActionMailerBaseLateAttachmentsProxy);
  let railsDocsActionMailerInlinePreviewInterceptor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailerInlinePreviewInterceptor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailer/InlinePreviewInterceptor.html'));
  })
  context.subscriptions.push(railsDocsActionMailerInlinePreviewInterceptor);
  let railsDocsActiveStorage = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorage', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage.html'));
  })
  context.subscriptions.push(railsDocsActiveStorage);
  let railsDocsActiveStorageAnalyzer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAnalyzer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Analyzer.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAnalyzer);
  let railsDocsActiveStorageLogSubscriber = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageLogSubscriber', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/LogSubscriber.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageLogSubscriber);
  let railsDocsActiveStorageRepresentations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageRepresentations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Representations.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageRepresentations);
  let railsDocsActiveStorageRepresentationsProxyController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageRepresentationsProxyController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Representations/ProxyController.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageRepresentationsProxyController);
  let railsDocsActiveStorageRepresentationsRedirectController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageRepresentationsRedirectController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Representations/RedirectController.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageRepresentationsRedirectController);
  let railsDocsActiveStoragePreview = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreview', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Preview.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreview);
  let railsDocsActiveStorageStreaming = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageStreaming', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Streaming.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageStreaming);
  let railsDocsActiveStorageSetCurrent = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageSetCurrent', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/SetCurrent.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageSetCurrent);
  let railsDocsActiveStorageDiskController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageDiskController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/DiskController.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageDiskController);
  let railsDocsActiveStorageVariant = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageVariant', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Variant.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageVariant);
  let railsDocsActiveStorageFixtureSet = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageFixtureSet', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/FixtureSet.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageFixtureSet);
  let railsDocsActiveStoragePreviewer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreviewer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Previewer.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreviewer);
  let railsDocsActiveStoragePreviewerMuPDFPreviewer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreviewerMuPDFPreviewer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Previewer/MuPDFPreviewer.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreviewerMuPDFPreviewer);
  let railsDocsActiveStoragePreviewerPopplerPDFPreviewer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreviewerPopplerPDFPreviewer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Previewer/PopplerPDFPreviewer.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreviewerPopplerPDFPreviewer);
  let railsDocsActiveStoragePreviewerVideoPreviewer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreviewerVideoPreviewer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Previewer/VideoPreviewer.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreviewerVideoPreviewer);
  let railsDocsActiveStorageReflection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageReflection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Reflection.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageReflection);
  let railsDocsActiveStorageAttached = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAttached', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Attached.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAttached);
  let railsDocsActiveStorageAttachedMany = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAttachedMany', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Attached/Many.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAttachedMany);
  let railsDocsActiveStorageAttachedOne = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAttachedOne', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Attached/One.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAttachedOne);
  let railsDocsActiveStorageAttachedModel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAttachedModel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Attached/Model.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAttachedModel);
  let railsDocsActiveStoragePreviewer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreviewer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Previewer.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreviewer);
  let railsDocsActiveStorageInvariableError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageInvariableError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/InvariableError.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageInvariableError);
  let railsDocsActiveStorageBlobs = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlobs', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blobs.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlobs);
  let railsDocsActiveStorageBlobsProxyController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlobsProxyController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blobs/ProxyController.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlobsProxyController);
  let railsDocsActiveStorageBlobsRedirectController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlobsRedirectController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blobs/RedirectController.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlobsRedirectController);
  let railsDocsActiveStorageFileNotFoundError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageFileNotFoundError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/FileNotFoundError.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageFileNotFoundError);
  let railsDocsActiveStorageRepresentations = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageRepresentations', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Representations.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageRepresentations);
  let railsDocsActiveStorageDirectUploadsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageDirectUploadsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/DirectUploadsController.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageDirectUploadsController);
  let railsDocsActiveStorageTransformers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageTransformers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Transformers.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageTransformers);
  let railsDocsActiveStorageTransformersImageProcessingTransformer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageTransformersImageProcessingTransformer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Transformers/ImageProcessingTransformer.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageTransformersImageProcessingTransformer);
  let railsDocsActiveStorageTransformersTransformer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageTransformersTransformer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Transformers/Transformer.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageTransformersTransformer);
  let railsDocsActiveStorageBlobs = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlobs', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blobs.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlobs);
  let railsDocsActiveStorageService = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageService', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Service.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageService);
  let railsDocsActiveStorageUnrepresentableError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageUnrepresentableError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/UnrepresentableError.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageUnrepresentableError);
  let railsDocsActiveStorageVariantRecord = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageVariantRecord', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/VariantRecord.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageVariantRecord);
  let railsDocsActiveStorageBaseController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBaseController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/BaseController.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBaseController);
  let railsDocsActiveStorageAttachment = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAttachment', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Attachment.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAttachment);
  let railsDocsActiveStorageBlob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blob.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlob);
  let railsDocsActiveStorageMirrorJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageMirrorJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/MirrorJob.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageMirrorJob);
  let railsDocsActiveStoragePreview = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreview', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Preview.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreview);
  let railsDocsActiveStoragePreviewUnprocessedError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreviewUnprocessedError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Preview/UnprocessedError.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreviewUnprocessedError);
  let railsDocsActiveStorageAnalyzeJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAnalyzeJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/AnalyzeJob.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAnalyzeJob);
  let railsDocsActiveStorageBaseJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBaseJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/BaseJob.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBaseJob);
  let railsDocsActiveStorageVariantWithRecord = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageVariantWithRecord', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/VariantWithRecord.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageVariantWithRecord);
  let railsDocsActiveStoragePreviewError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePreviewError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/PreviewError.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePreviewError);
  let railsDocsActiveStorageVariation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageVariation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Variation.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageVariation);
  let railsDocsActiveStorageIntegrityError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageIntegrityError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/IntegrityError.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageIntegrityError);
  let railsDocsActiveStorageService = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageService', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Service.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageService);
  let railsDocsActiveStorageServiceS3Service = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageServiceS3Service', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Service/S3Service.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageServiceS3Service);
  let railsDocsActiveStorageServiceMirrorService = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageServiceMirrorService', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Service/MirrorService.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageServiceMirrorService);
  let railsDocsActiveStorageServiceGCSService = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageServiceGCSService', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Service/GCSService.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageServiceGCSService);
  let railsDocsActiveStorageServiceDiskService = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageServiceDiskService', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Service/DiskService.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageServiceDiskService);
  let railsDocsActiveStorageServiceAzureStorageService = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageServiceAzureStorageService', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Service/AzureStorageService.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageServiceAzureStorageService);
  let railsDocsActiveStorageUnpreviewableError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageUnpreviewableError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/UnpreviewableError.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageUnpreviewableError);
  let railsDocsActiveStorageBlob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blob.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlob);
  let railsDocsActiveStorageBlobIdentifiable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlobIdentifiable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blob/Identifiable.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlobIdentifiable);
  let railsDocsActiveStorageBlobAnalyzable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlobAnalyzable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blob/Analyzable.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlobAnalyzable);
  let railsDocsActiveStorageBlobRepresentable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageBlobRepresentable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Blob/Representable.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageBlobRepresentable);
  let railsDocsActiveStorageError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Error.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageError);
  let railsDocsActiveStorageTransformers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageTransformers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Transformers.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageTransformers);
  let railsDocsActiveStorageVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageVERSION);
  let railsDocsActiveStorageAnalyzer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAnalyzer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Analyzer.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAnalyzer);
  let railsDocsActiveStorageAnalyzerImageAnalyzer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAnalyzerImageAnalyzer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Analyzer/ImageAnalyzer.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAnalyzerImageAnalyzer);
  let railsDocsActiveStorageAnalyzerVideoAnalyzer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAnalyzerVideoAnalyzer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Analyzer/VideoAnalyzer.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAnalyzerVideoAnalyzer);
  let railsDocsActiveStoragePurgeJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStoragePurgeJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/PurgeJob.html'));
  })
  context.subscriptions.push(railsDocsActiveStoragePurgeJob);
  let railsDocsActiveStorageFilename = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageFilename', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Filename.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageFilename);
  let railsDocsActiveStorageAttached = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageAttached', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Attached.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageAttached);
  let railsDocsActiveStorageReflection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageReflection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Reflection.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageReflection);
  let railsDocsActiveStorageReflectionActiveRecordExtensions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageReflectionActiveRecordExtensions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Reflection/ActiveRecordExtensions.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageReflectionActiveRecordExtensions);
  let railsDocsActiveStorageReflectionActiveRecordExtensionsClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageReflectionActiveRecordExtensionsClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Reflection/ActiveRecordExtensions/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageReflectionActiveRecordExtensionsClassMethods);
  let railsDocsActiveStorageReflectionActiveRecordExtensions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveStorageReflectionActiveRecordExtensions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveStorage/Reflection/ActiveRecordExtensions.html'));
  })
  context.subscriptions.push(railsDocsActiveStorageReflectionActiveRecordExtensions);
  let railsDocsDate = vscode.commands.registerCommand('vscode-rails-docs.railsDocsDate', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Date.html'));
  })
  context.subscriptions.push(railsDocsDate);
  let railsDocsActiveModel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveModel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveModel.html'));
  })
  context.subscriptions.push(railsDocsActiveModel);
  let railsDocsActionController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionController.html'));
  })
  context.subscriptions.push(railsDocsActionController);
  let railsDocsMinitest = vscode.commands.registerCommand('vscode-rails-docs.railsDocsMinitest', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Minitest.html'));
  })
  context.subscriptions.push(railsDocsMinitest);
  let railsDocsActiveSupport = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActiveSupport', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActiveSupport.html'));
  })
  context.subscriptions.push(railsDocsActiveSupport);
  let railsDocsActionMailbox = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailbox', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox.html'));
  })
  context.subscriptions.push(railsDocsActionMailbox);
  let railsDocsActionMailboxTestHelper = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxTestHelper', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/TestHelper.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxTestHelper);
  let railsDocsActionMailboxInboundEmail = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmail', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmail.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmail);
  let railsDocsActionMailboxInboundEmailRoutable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmailRoutable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmail/Routable.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmailRoutable);
  let railsDocsActionMailboxInboundEmailMessageId = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmailMessageId', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmail/MessageId.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmailMessageId);
  let railsDocsActionMailboxInboundEmailIncineratable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmailIncineratable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmail/Incineratable.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmailIncineratable);
  let railsDocsActionMailboxInboundEmailIncineratableIncineration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmailIncineratableIncineration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmail/Incineratable/Incineration.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmailIncineratableIncineration);
  let railsDocsActionMailboxInboundEmailIncineratable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmailIncineratable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmail/Incineratable.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmailIncineratable);
  let railsDocsActionMailboxCallbacks = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxCallbacks', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Callbacks.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxCallbacks);
  let railsDocsActionMailboxRouting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRouting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Routing.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRouting);
  let railsDocsActionMailboxRouter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRouter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Router.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRouter);
  let railsDocsActionMailboxBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Base.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxBase);
  let railsDocsActionMailboxIncinerationJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIncinerationJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/IncinerationJob.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIncinerationJob);
  let railsDocsActionMailboxRoutingJob = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRoutingJob', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/RoutingJob.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRoutingJob);
  let railsDocsActionMailboxRelayer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRelayer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Relayer.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRelayer);
  let railsDocsActionMailboxRelayerResult = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRelayerResult', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Relayer/Result.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRelayerResult);
  let railsDocsActionMailboxIngresses = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngresses', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngresses);
  let railsDocsActionMailboxIngressesPostmark = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesPostmark', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Postmark.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesPostmark);
  let railsDocsActionMailboxIngressesPostmarkInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesPostmarkInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Postmark/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesPostmarkInboundEmailsController);
  let railsDocsActionMailboxIngressesPostmark = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesPostmark', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Postmark.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesPostmark);
  let railsDocsActionMailboxIngressesMandrill = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMandrill', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mandrill.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMandrill);
  let railsDocsActionMailboxIngressesSendgrid = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesSendgrid', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Sendgrid.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesSendgrid);
  let railsDocsActionMailboxIngressesSendgridInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesSendgridInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Sendgrid/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesSendgridInboundEmailsController);
  let railsDocsActionMailboxIngressesMandrill = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMandrill', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mandrill.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMandrill);
  let railsDocsActionMailboxIngressesMandrillInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMandrillInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mandrill/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMandrillInboundEmailsController);
  let railsDocsActionMailboxIngressesMandrillInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMandrillInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mandrill/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMandrillInboundEmailsController);
  let railsDocsActionMailboxIngressesMandrillInboundEmailsControllerAuthenticator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMandrillInboundEmailsControllerAuthenticator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mandrill/InboundEmailsController/Authenticator.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMandrillInboundEmailsControllerAuthenticator);
  let railsDocsActionMailboxIngressesSendgrid = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesSendgrid', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Sendgrid.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesSendgrid);
  let railsDocsActionMailboxIngressesMailgun = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMailgun', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mailgun.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMailgun);
  let railsDocsActionMailboxIngressesMailgun = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMailgun', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mailgun.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMailgun);
  let railsDocsActionMailboxIngressesMailgunInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMailgunInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mailgun/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMailgunInboundEmailsController);
  let railsDocsActionMailboxIngressesMailgunInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMailgunInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mailgun/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMailgunInboundEmailsController);
  let railsDocsActionMailboxIngressesMailgunInboundEmailsControllerAuthenticator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesMailgunInboundEmailsControllerAuthenticator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Mailgun/InboundEmailsController/Authenticator.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesMailgunInboundEmailsControllerAuthenticator);
  let railsDocsActionMailboxIngressesRelay = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesRelay', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Relay.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesRelay);
  let railsDocsActionMailboxIngressesRelay = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesRelay', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Relay.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesRelay);
  let railsDocsActionMailboxIngressesRelayInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngressesRelayInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses/Relay/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngressesRelayInboundEmailsController);
  let railsDocsActionMailboxEngine = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxEngine', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Engine.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxEngine);
  let railsDocsActionMailboxBaseController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxBaseController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/BaseController.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxBaseController);
  let railsDocsActionMailboxIngresses = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxIngresses', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Ingresses.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxIngresses);
  let railsDocsActionMailboxInboundEmail = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmail', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmail.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmail);
  let railsDocsActionMailboxRelayer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRelayer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Relayer.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRelayer);
  let railsDocsActionMailboxInboundEmails = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxInboundEmails', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/InboundEmails.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxInboundEmails);
  let railsDocsActionMailboxVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/VERSION.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxVERSION);
  let railsDocsActionMailboxTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/TestCase.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxTestCase);
  let railsDocsActionMailboxRouter = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRouter', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Router.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRouter);
  let railsDocsActionMailboxRouterRoute = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRouterRoute', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Router/Route.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRouterRoute);
  let railsDocsActionMailboxRouterRoutingError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsActionMailboxRouterRoutingError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/ActionMailbox/Router/RoutingError.html'));
  })
  context.subscriptions.push(railsDocsActionMailboxRouterRoutingError);
  let railsDocsRails = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRails', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails.html'));
  })
  context.subscriptions.push(railsDocsRails);
  let railsDocsRailsRails = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRails', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails.html'));
  })
  context.subscriptions.push(railsDocsRailsRails);
  let railsDocsRailsConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Configuration.html'));
  })
  context.subscriptions.push(railsDocsRailsConfiguration);
  let railsDocsRailsConfigurationMiddlewareStackProxy = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConfigurationMiddlewareStackProxy', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Configuration/MiddlewareStackProxy.html'));
  })
  context.subscriptions.push(railsDocsRailsConfigurationMiddlewareStackProxy);
  let railsDocsRailsConductor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConductor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Conductor.html'));
  })
  context.subscriptions.push(railsDocsRailsConductor);
  let railsDocsRailsSourceAnnotationExtractor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsSourceAnnotationExtractor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/SourceAnnotationExtractor.html'));
  })
  context.subscriptions.push(railsDocsRailsSourceAnnotationExtractor);
  let railsDocsRailsApplication = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplication', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application.html'));
  })
  context.subscriptions.push(railsDocsRailsApplication);
  let railsDocsRailsInfo = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsInfo', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Info.html'));
  })
  context.subscriptions.push(railsDocsRailsInfo);
  let railsDocsRailsSecrets = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsSecrets', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Secrets.html'));
  })
  context.subscriptions.push(railsDocsRailsSecrets);
  let railsDocsRailsSecretsMissingKeyError = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsSecretsMissingKeyError', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Secrets/MissingKeyError.html'));
  })
  context.subscriptions.push(railsDocsRailsSecretsMissingKeyError);
  let railsDocsRailsConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Configuration.html'));
  })
  context.subscriptions.push(railsDocsRailsConfiguration);
  let railsDocsRailsPaths = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsPaths', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Paths.html'));
  })
  context.subscriptions.push(railsDocsRailsPaths);
  let railsDocsRailsPathsRoot = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsPathsRoot', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Paths/Root.html'));
  })
  context.subscriptions.push(railsDocsRailsPathsRoot);
  let railsDocsRailsPathsPath = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsPathsPath', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Paths/Path.html'));
  })
  context.subscriptions.push(railsDocsRailsPathsPath);
  let railsDocsRailsCommand = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommand', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command.html'));
  })
  context.subscriptions.push(railsDocsRailsCommand);
  let railsDocsRailsPluginBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsPluginBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/PluginBuilder.html'));
  })
  context.subscriptions.push(railsDocsRailsPluginBuilder);
  let railsDocsRailsInitializable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsInitializable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Initializable.html'));
  })
  context.subscriptions.push(railsDocsRailsInitializable);
  let railsDocsRailsInitializableInitializer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsInitializableInitializer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Initializable/Initializer.html'));
  })
  context.subscriptions.push(railsDocsRailsInitializableInitializer);
  let railsDocsRailsInitializableCollection = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsInitializableCollection', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Initializable/Collection.html'));
  })
  context.subscriptions.push(railsDocsRailsInitializableCollection);
  let railsDocsRailsInitializableClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsInitializableClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Initializable/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsRailsInitializableClassMethods);
  let railsDocsRailsServer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsServer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Server.html'));
  })
  context.subscriptions.push(railsDocsRailsServer);
  let railsDocsRailsServerOptions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsServerOptions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Server/Options.html'));
  })
  context.subscriptions.push(railsDocsRailsServerOptions);
  let railsDocsRailsPaths = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsPaths', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Paths.html'));
  })
  context.subscriptions.push(railsDocsRailsPaths);
  let railsDocsRailsSourceAnnotationExtractor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsSourceAnnotationExtractor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/SourceAnnotationExtractor.html'));
  })
  context.subscriptions.push(railsDocsRailsSourceAnnotationExtractor);
  let railsDocsRailsSourceAnnotationExtractorAnnotation = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsSourceAnnotationExtractorAnnotation', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/SourceAnnotationExtractor/Annotation.html'));
  })
  context.subscriptions.push(railsDocsRailsSourceAnnotationExtractorAnnotation);
  let railsDocsRailsSecrets = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsSecrets', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Secrets.html'));
  })
  context.subscriptions.push(railsDocsRailsSecrets);
  let railsDocsRailsRack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rack.html'));
  })
  context.subscriptions.push(railsDocsRailsRack);
  let railsDocsRailsDBConsole = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsDBConsole', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/DBConsole.html'));
  })
  context.subscriptions.push(railsDocsRailsDBConsole);
  let railsDocsRailsEngine = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsEngine', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Engine.html'));
  })
  context.subscriptions.push(railsDocsRailsEngine);
  let railsDocsRailsInitializable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsInitializable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Initializable.html'));
  })
  context.subscriptions.push(railsDocsRailsInitializable);
  let railsDocsRailsAppBuilder = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsAppBuilder', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/AppBuilder.html'));
  })
  context.subscriptions.push(railsDocsRailsAppBuilder);
  let railsDocsRailsConsole = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConsole', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Console.html'));
  })
  context.subscriptions.push(railsDocsRailsConsole);
  let railsDocsRailsRack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rack.html'));
  })
  context.subscriptions.push(railsDocsRailsRack);
  let railsDocsRailsRackLogger = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRackLogger', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rack/Logger.html'));
  })
  context.subscriptions.push(railsDocsRailsRackLogger);
  let railsDocsRailsAPI = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsAPI', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/API.html'));
  })
  context.subscriptions.push(railsDocsRailsAPI);
  let railsDocsRailsAPIStableTask = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsAPIStableTask', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/API/StableTask.html'));
  })
  context.subscriptions.push(railsDocsRailsAPIStableTask);
  let railsDocsRailsAPIRepoTask = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsAPIRepoTask', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/API/RepoTask.html'));
  })
  context.subscriptions.push(railsDocsRailsAPIRepoTask);
  let railsDocsRailsAPIEdgeTask = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsAPIEdgeTask', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/API/EdgeTask.html'));
  })
  context.subscriptions.push(railsDocsRailsAPIEdgeTask);
  let railsDocsRailsAPITask = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsAPITask', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/API/Task.html'));
  })
  context.subscriptions.push(railsDocsRailsAPITask);
  let railsDocsRailsGenerators = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGenerators', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators.html'));
  })
  context.subscriptions.push(railsDocsRailsGenerators);
  let railsDocsRailsCommand = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommand', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command.html'));
  })
  context.subscriptions.push(railsDocsRailsCommand);
  let railsDocsRailsCommandActions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandActions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Actions.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandActions);
  let railsDocsRailsCommandHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Helpers.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandHelpers);
  let railsDocsRailsCommandBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Base.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandBase);
  let railsDocsRailsCommandDb = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandDb', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Db.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandDb);
  let railsDocsRailsCommandDbSystem = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandDbSystem', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Db/System.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandDbSystem);
  let railsDocsRailsCommandDb = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandDb', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Db.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandDb);
  let railsDocsRailsCommandHelpers = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandHelpers', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Helpers.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandHelpers);
  let railsDocsRailsCommandHelpersEditor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsCommandHelpersEditor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Command/Helpers/Editor.html'));
  })
  context.subscriptions.push(railsDocsRailsCommandHelpersEditor);
  let railsDocsRailsGenerators = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGenerators', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators.html'));
  })
  context.subscriptions.push(railsDocsRailsGenerators);
  let railsDocsRailsGeneratorsActions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsActions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Actions.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsActions);
  let railsDocsRailsGeneratorsBenchmarkGenerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsBenchmarkGenerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/BenchmarkGenerator.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsBenchmarkGenerator);
  let railsDocsRailsGeneratorsBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Base.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsBase);
  let railsDocsRailsGeneratorsAppBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsAppBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/AppBase.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsAppBase);
  let railsDocsRailsGeneratorsAppGenerator = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsAppGenerator', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/AppGenerator.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsAppGenerator);
  let railsDocsRailsGeneratorsTesting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTesting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Testing.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTesting);
  let railsDocsRailsGeneratorsTestingAssertions = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTestingAssertions', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Testing/Assertions.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTestingAssertions);
  let railsDocsRailsGeneratorsTestingBehaviour = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTestingBehaviour', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Testing/Behaviour.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTestingBehaviour);
  let railsDocsRailsGeneratorsTestingSetupAndTeardown = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTestingSetupAndTeardown', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Testing/SetupAndTeardown.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTestingSetupAndTeardown);
  let railsDocsRailsGeneratorsTestingBehaviour = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTestingBehaviour', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Testing/Behaviour.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTestingBehaviour);
  let railsDocsRailsGeneratorsTestingBehaviourClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTestingBehaviourClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Testing/Behaviour/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTestingBehaviourClassMethods);
  let railsDocsRailsGeneratorsAppBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsAppBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/AppBase.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsAppBase);
  let railsDocsRailsGeneratorsAppBaseGemfileEntry = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsAppBaseGemfileEntry', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/AppBase/GemfileEntry.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsAppBaseGemfileEntry);
  let railsDocsRailsGeneratorsMigration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsMigration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Migration.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsMigration);
  let railsDocsRailsGeneratorsDb = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsDb', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Db.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsDb);
  let railsDocsRailsGeneratorsDbSystem = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsDbSystem', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Db/System.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsDbSystem);
  let railsDocsRailsGeneratorsNamedBase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsNamedBase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/NamedBase.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsNamedBase);
  let railsDocsRailsGeneratorsDb = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsDb', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Db.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsDb);
  let railsDocsRailsGeneratorsTesting = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTesting', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/Testing.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTesting);
  let railsDocsRailsGeneratorsTestCase = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsTestCase', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/TestCase.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsTestCase);
  let railsDocsRailsGeneratorsActiveModel = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsGeneratorsActiveModel', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Generators/ActiveModel.html'));
  })
  context.subscriptions.push(railsDocsRailsGeneratorsActiveModel);
  let railsDocsRailsApplication = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplication', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application.html'));
  })
  context.subscriptions.push(railsDocsRailsApplication);
  let railsDocsRailsApplicationBootstrap = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationBootstrap', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/Bootstrap.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationBootstrap);
  let railsDocsRailsApplicationRoutesReloader = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationRoutesReloader', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/RoutesReloader.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationRoutesReloader);
  let railsDocsRailsApplicationConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/Configuration.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationConfiguration);
  let railsDocsRailsApplicationDefaultMiddlewareStack = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationDefaultMiddlewareStack', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/DefaultMiddlewareStack.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationDefaultMiddlewareStack);
  let railsDocsRailsApplicationFinisher = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationFinisher', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/Finisher.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationFinisher);
  let railsDocsRailsApplicationFinisher = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationFinisher', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/Finisher.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationFinisher);
  let railsDocsRailsApplicationFinisherInterlockHook = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationFinisherInterlockHook', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/Finisher/InterlockHook.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationFinisherInterlockHook);
  let railsDocsRailsApplicationFinisherMutexHook = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsApplicationFinisherMutexHook', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Application/Finisher/MutexHook.html'));
  })
  context.subscriptions.push(railsDocsRailsApplicationFinisherMutexHook);
  let railsDocsRailsRailtie = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailtie', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Railtie.html'));
  })
  context.subscriptions.push(railsDocsRailsRailtie);
  let railsDocsRailsRailtieConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailtieConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Railtie/Configuration.html'));
  })
  context.subscriptions.push(railsDocsRailsRailtieConfiguration);
  let railsDocsRailsRailtieConfigurable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailtieConfigurable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Railtie/Configurable.html'));
  })
  context.subscriptions.push(railsDocsRailsRailtieConfigurable);
  let railsDocsRailsRailtieConfigurable = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailtieConfigurable', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Railtie/Configurable.html'));
  })
  context.subscriptions.push(railsDocsRailsRailtieConfigurable);
  let railsDocsRailsRailtieConfigurableClassMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailtieConfigurableClassMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Railtie/Configurable/ClassMethods.html'));
  })
  context.subscriptions.push(railsDocsRailsRailtieConfigurableClassMethods);
  let railsDocsRailsServer = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsServer', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Server.html'));
  })
  context.subscriptions.push(railsDocsRailsServer);
  let railsDocsRailsAPI = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsAPI', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/API.html'));
  })
  context.subscriptions.push(railsDocsRailsAPI);
  let railsDocsRailsBacktraceCleaner = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsBacktraceCleaner', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/BacktraceCleaner.html'));
  })
  context.subscriptions.push(railsDocsRailsBacktraceCleaner);
  let railsDocsRailsRailtie = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailtie', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Railtie.html'));
  })
  context.subscriptions.push(railsDocsRailsRailtie);
  let railsDocsRailsEngine = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsEngine', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Engine.html'));
  })
  context.subscriptions.push(railsDocsRailsEngine);
  let railsDocsRailsEngineConfiguration = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsEngineConfiguration', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Engine/Configuration.html'));
  })
  context.subscriptions.push(railsDocsRailsEngineConfiguration);
  let railsDocsRailsEngineUpdater = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsEngineUpdater', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Engine/Updater.html'));
  })
  context.subscriptions.push(railsDocsRailsEngineUpdater);
  let railsDocsRailsEngineRailties = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsEngineRailties', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Engine/Railties.html'));
  })
  context.subscriptions.push(railsDocsRailsEngineRailties);
  let railsDocsRailsVERSION = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsVERSION', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/VERSION.html'));
  })
  context.subscriptions.push(railsDocsRailsVERSION);
  let railsDocsRailsConsoleMethods = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConsoleMethods', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/ConsoleMethods.html'));
  })
  context.subscriptions.push(railsDocsRailsConsoleMethods);
  let railsDocsRailsRails = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRails', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails.html'));
  })
  context.subscriptions.push(railsDocsRailsRails);
  let railsDocsRailsRailsConductor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductor);
  let railsDocsRailsRailsConductor = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductor', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductor);
  let railsDocsRailsRailsConductorActionMailbox = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductorActionMailbox', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor/ActionMailbox.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductorActionMailbox);
  let railsDocsRailsRailsConductorActionMailbox = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductorActionMailbox', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor/ActionMailbox.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductorActionMailbox);
  let railsDocsRailsRailsConductorActionMailboxReroutesController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductorActionMailboxReroutesController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor/ActionMailbox/ReroutesController.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductorActionMailboxReroutesController);
  let railsDocsRailsRailsConductorActionMailboxInboundEmailsController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductorActionMailboxInboundEmailsController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor/ActionMailbox/InboundEmailsController.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductorActionMailboxInboundEmailsController);
  let railsDocsRailsRailsConductorActionMailboxInboundEmails = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductorActionMailboxInboundEmails', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor/ActionMailbox/InboundEmails.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductorActionMailboxInboundEmails);
  let railsDocsRailsRailsConductorActionMailboxInboundEmailsSourcesController = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductorActionMailboxInboundEmailsSourcesController', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor/ActionMailbox/InboundEmails/SourcesController.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductorActionMailboxInboundEmailsSourcesController);
  let railsDocsRailsRailsConductorActionMailboxInboundEmails = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsRailsConductorActionMailboxInboundEmails', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Rails/Conductor/ActionMailbox/InboundEmails.html'));
  })
  context.subscriptions.push(railsDocsRailsRailsConductorActionMailboxInboundEmails);
  let railsDocsRailsConsole = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConsole', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Console.html'));
  })
  context.subscriptions.push(railsDocsRailsConsole);
  let railsDocsRailsConsoleBacktraceCleaner = vscode.commands.registerCommand('vscode-rails-docs.railsDocsRailsConsoleBacktraceCleaner', ()=> {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Rails/Console/BacktraceCleaner.html'));
  })
  context.subscriptions.push(railsDocsRailsConsoleBacktraceCleaner);

  
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-rails-docs" is now active!');

	// The command has been defined in the package.json file // Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('vscode-rails-docs.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from vscode-rails-docs!');
	// });
	// context.subscriptions.push(disposable);

	// the templates
	// let date = vscode.commands.registerCommand('vscode-rails-docs.date', ()=> {
	// 	vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://api.rubyonrails.org/classes/Date.html'));
	// })
	// context.subscriptions.push(date);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

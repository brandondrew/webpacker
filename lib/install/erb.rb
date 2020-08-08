require "webpacker/configuration"

say "Copying the example entry file to #{Webpacker.config.source_entry_path}"
copy_file "#{__dir__}/examples/erb/hello_erb.js.erb",
  "#{Webpacker.config.source_entry_path}/hello_erb.js.erb"

say "Installing all Erb dependencies"
run "yarn add rails-erb-loader"

say "Webpacker now supports Erb in JS 🎉", :green

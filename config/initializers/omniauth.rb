Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['5HxnSMGuIWTgHs2Ex28YtXJsx'], ENV['
T3J1P3eR5m4bLNddYCnuJnbvhKDWYTmlfwRuSiyfTnS6VXhZ1B']
end
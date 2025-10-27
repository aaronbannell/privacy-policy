export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you create an account,
              connect social media accounts, and use our social media scheduling service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Schedule and publish posts to your connected social media accounts</li>
              <li>Send you technical notices and support messages</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Social Media Integration</h2>
            <p>
              When you connect your Instagram or other social media accounts, we access only
              the permissions necessary to schedule and publish posts on your behalf. We do not
              access or store any other information from your social media accounts beyond what
              is required for our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Storage and Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              Your data is stored securely and we use encryption for sensitive data transmission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Instagram Webhooks</h2>
            <p>
              We receive webhook notifications from Instagram for comments, mentions, and media
              events to provide you with real-time updates about your Instagram account activity.
              This data is used solely to enhance your experience with our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
            <p>
              We use third-party services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Supabase for data storage and authentication</li>
              <li>Meta Platforms (Facebook/Instagram) for social media integration</li>
              <li>Cloud storage providers for media files</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Disconnect your social media accounts at any time</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any
              changes by posting the new privacy policy on this page and updating the "Last
              Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices,
              please contact us.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

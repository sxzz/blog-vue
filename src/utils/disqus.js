export default id => {
  window.disqus_identifier = id;
  window.disqus_url = location.href;

  const { DISQUS } = window;
  if (DISQUS) {
    DISQUS.reset({
      reload: true,
      config: function() {
        this.page.identifier = window.disqus_identifier;
        this.page.url = window.disqus_url;
      },
    });
    return;
  }

  let s = document.createElement('script');
  s.src = 'https://sxzz.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (document.head || document.body).appendChild(s);
};

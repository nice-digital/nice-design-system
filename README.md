# NICE Experience site

> GitHub pages (Jekyll) static site to showcase the NICE Experience

## Requirements

The site uses [Jekyll](https://jekyllrb.com/docs/installation/#requirements) as a static site generator.

If you're running on Windows, Jekyll isn't specifically supported, but there's a [page explaining how to get it running](https://jekyllrb.com/docs/windows/#installation).

However, there's an easier way:

## Installation on Windows

[This article](http://daverupert.com/2016/04/jekyll-on-windows-with-bash/) gives a detailed explanation but here are the steps:

### 1 - Install Bash on Ubuntu on Windows

Follow the [https://msdn.microsoft.com/en-us/commandline/wsl/install_guide](installation guide for Bash on Ubuntu on Windows)

### 2 - Install make/gcc

``` bash
sudo -s
apt update
apt install make gcc
```

### 3 - Install Ruby

``` bash
apt-add-repository ppa:brightbox/ruby-ng
apt update
apt install ruby2.3 ruby2.3-dev ruby-switch
```

### 4 - Install and run

``` bash
gem install bundler
cd /mnt/c/_src/NICE-Experience-gh-pages # note the /mnt/c path mapped the c:/ drive on Windows
bundle install
bundle exec jekyll serve --force_polling
```

Note: `--force_polling` is needed on Windows because of [this bug](https://github.com/jekyll/jekyll/issues/5233).

### 5 - Navigate!

Navigate to [http://localhost:9001/NICE-Experience/](http://localhost:9001/NICE-Experience/)

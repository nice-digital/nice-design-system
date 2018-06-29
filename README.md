# NICE Design System site

> GitHub pages (Jekyll) static site to showcase the NICE Design System

## What is it?

A static site to showcase the [NICE Design System](https://nhsevidence.github.io/nice-design-system/) for hosting on [GitHub pages](https://pages.github.com/). It uses [Jekyll](https://jekyllrb.com/), a [ruby](http://www.ruby-lang.org/en/)-based static site generator, with pages written in [Markdown](https://daringfireball.net/projects/markdown/) with [Liquid](https://github.com/Shopify/liquid/wiki) templates.

## How to run

### Natively

> Note: this is for running on Linux or Mac. If you're on Windows, please see either the [docker](#docker) or [windows](#windows) sections.

Install the [required software](https://jekyllrb.com/docs/installation/#requirements) then run the following commands to run the site:

```sh
gem install jekyll bundler
bundle exec jekyll serve
```

However, running through [Docker](#docker) is easier as you don't need to install all the dependencies yourself.

### Docker

We recommend using [Docker](https://www.docker.com/) to run the site locally. if you're new to Docker, read the [getting started](https://docs.docker.com/get-started/) docs first. 

We recommend Docker as the image contains all the require dependencies so it's a one-command launch. Run the following to launch a container with the site running on port 9001:

```sh
./docker-dev.sh
```

Then navigate to [http://localhost:9001/nice-design-system/](http://localhost:9001/nice-design-system/).

If you get the error "the input device is not a TTY. If you are using mintty, try prefixing the command with 'winpty'" then either ignore it, remove `-it` from docker-dev.sh or use a different shell e.g. GitBash.

#### Docker for Windows

If you're running [Docker for Windows](https://www.docker.com/docker-windows), make sure to:

- [switch to Linux containers](https://docs.docker.com/docker-for-windows/#switch-between-windows-and-linux-containers) via the Docker system tray icon context menu.
- [share your local drive](https://docs.docker.com/docker-for-windows/#shared-drives).

### Windows

If you're running on Windows, Jekyll isn't specifically supported, but there's a [page explaining how to get it running](https://jekyllrb.com/docs/windows/#installation).

However, there's an easier way. [This article](http://daverupert.com/2016/04/jekyll-on-windows-with-bash/) gives a detailed explanation but here are the steps:

#### 1 - Install Bash on Ubuntu on Windows

Follow the [installation guide for Bash on Ubuntu on Windows](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide).

#### 2 - Install make/gcc

``` bash
sudo -s
apt update
apt install make gcc
```

#### 3 - Install Ruby

``` bash
apt-add-repository ppa:brightbox/ruby-ng
apt update
apt install ruby2.3 ruby2.3-dev ruby-switch
```

#### 4 - Install and run

``` bash
gem install bundler
```

If you get errors relating to the installation of `nokogiri` due to errors around `zlib is missing; necessary for building libxml2`, you can install the necessary library with

``` bash
sudo apt-get install zlib1g-dev
```
before continuing on to...

``` bash
cd /mnt/c/_src/nice-design-system-gh-pages # note the /mnt/c path mapped the c:/ drive on Windows
bundle install
bundle exec jekyll serve --force_polling
```

Note: `--force_polling` is needed on Windows because of [this bug](https://github.com/jekyll/jekyll/issues/5233).

#### 5 - Navigate

Navigate to [http://localhost:9001/nice-design-system/](http://localhost:9001/nice-design-system/)

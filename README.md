# 🚀 AWS Cloud Portfolio

A production-style personal portfolio hosted on AWS using Amazon S3, CloudFront, and GitHub Actions with secure OIDC authentication.

---

## 🌐 Live Demo

🔗 https://d3pbd2sug35sj5.cloudfront.net/

---

## 📖 Overview

This project is a static portfolio website built with HTML, CSS, and JavaScript.

Instead of hosting it on GitHub Pages, I designed and deployed it using AWS best practices:

- Private Amazon S3 bucket
- CloudFront CDN
- Origin Access Control (OAC)
- HTTPS
- GitHub Actions CI/CD
- OpenID Connect (OIDC) authentication
- CloudFront cache invalidation

The goal of this project is to demonstrate practical cloud engineering and DevOps skills.

---

## 🏗️ Architecture

```text
                git push
                   │
                   ▼
        GitHub Repository
                   │
                   ▼
         GitHub Actions (CI/CD)
                   │
        OIDC Authentication
                   │
                   ▼
               AWS IAM Role
                   │
                   ▼
          Amazon S3 (Private)
                   │
     Origin Access Control (OAC)
                   │
                   ▼
          Amazon CloudFront
                   │
                   ▼
             HTTPS Website
```

---

## ⚙️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### AWS

- Amazon S3
- Amazon CloudFront
- AWS IAM
- Origin Access Control (OAC)
- AWS CloudWatch

### DevOps

- GitHub Actions
- OpenID Connect (OIDC)
- CI/CD

---

## ✨ Features

- Responsive portfolio website
- Private S3 bucket
- CloudFront CDN
- HTTPS delivery
- Secure OIDC authentication
- Automated deployment
- Automatic CloudFront cache invalidation

---

## 🚀 CI/CD Pipeline

Every push to the `main` branch automatically:

1. Starts GitHub Actions
2. Authenticates to AWS using OIDC
3. Assumes an IAM Role
4. Syncs files to Amazon S3
5. Invalidates the CloudFront cache
6. Publishes the latest version

---

## 🔒 Security

Instead of storing AWS Access Keys inside GitHub Secrets, this project uses:

- OpenID Connect (OIDC)
- Temporary AWS STS credentials
- Least-privilege IAM Role

This follows AWS security best practices.

---

## 📊 Monitoring

Amazon CloudWatch is used to monitor:

- Requests
- Bytes Downloaded
- 4xx Error Rate
- 5xx Error Rate

---

## 📂 Project Structure

```text
cloud-portfolio
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── assets/
├── css/
├── js/
│
├── index.html
├── README.md
└── .gitignore
```

---

## 🎯 Future Improvements

- [ ] Terraform Infrastructure as Code
- [ ] Custom Domain
- [ ] ACM SSL Certificate
- [ ] AWS WAF
- [ ] CloudWatch Dashboard
- [ ] CloudWatch Alarms
- [ ] Lambda Contact Form

---

## 👤 Author

**Thiha Soe**

- GitHub: https://github.com/Ronin-Eugene
- LinkedIn: (https://www.linkedin.com/in/thiha-soe-5ba28a199/)

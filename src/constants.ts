/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const RESUME_DATA = {
  name: "Vignesh Gunasekaran",
  title: "Data Engineer",
  experienceYear: "3 years",
  contact: {
    location: "Coimbatore, Tamil Nadu",
    email: "vigneshgv2001@gmail.com",
    phone: "+91 6382366500",
    links: [
      { name: "LinkedIn", url: "https://linkedin.com/in/vignesh-gunasekaran", type: "linkedin" },
      { name: "Github", url: "https://github.com/vigneshgv", type: "github" },
      { name: "LeetCode", url: "https://leetcode.com/vigneshgv", type: "code" }
    ]
  },
  summary: "Data Engineer | PySpark Developer | Big Data Analyst & ETL Specialist | DEVOPS. Specialized in PySpark, SQL and Big Data environments including Hadoop, AWS, Databricks, and Snowflake. Architected tailored ETL pipelines, optimizing jobs for cost-efficiency and focused on data integrity and quality in the finance sector.",
  skills: [
    {
      category: "Languages",
      items: ["Python", "SQL", "PySpark", "Java", "Shell"]
    },
    {
      category: "Big Data Systems",
      items: ["Teradata", "Hadoop", "AWS Glue", "Databricks", "Snowflake"]
    },
    {
      category: "Cloud (AWS)",
      items: ["Glue", "Lambda", "Step Functions", "Event Bridge", "Athena", "S3", "Lakeformation"]
    },
    {
      category: "DevOps",
      items: ["Git (Bitbucket, GitLab)", "Jenkins", "SonarQube", "Apache Airflow"]
    },
    {
      category: "Tools",
      items: ["Alation", "Anaconda", "VS Code", "Copilot Agents", "Postman API"]
    }
  ],
  experience: [
    {
      company: "Barclays",
      role: "BA4 - Data Engineer",
      location: "Global Investment Bank",
      period: "July 2023 - Present",
      description: "Led development to production deployment including DevOps (CI/CD) of ETL process involving data related to regulatory reporting batched-processed daily around 50GB+ using event bridge/Airflow scheduler.",
      highlights: [
        "Optimized business logic reducing cost by 25%.",
        "Managed data quality validation using DQ SQL jobs aligned with data governance.",
        "Migrated legacy tables to Apache Hadoop ecosystem using Spark jobs.",
        "Built generic components like housekeeping scripts and date control frameworks.",
        "Converted legacy BTEQ-SQL scripts to PySpark scripts."
      ]
    }
  ],
  achievements: [
    "Successfully promoted to associate level (BA4) from entry level (BA3) in March 2025.",
    "Nominated to emerging star award in October 2025."
  ],
  projects: [
    {
      title: "Automated ETL Pipeline",
      description: "Scalable data processing pipeline using AWS Glue and PySpark for processing banking transactions.",
      tech: ["PySpark", "AWS Glue", "S3", "Athena"],
      github: "https://github.com/vigneshgv/etl-pipeline"
    },
    {
      title: "Data Quality Framework",
      description: "Custom DQ framework to validate data integrity across massive Snowflake datasets.",
      tech: ["SQL", "Snowflake", "Python"],
      github: "https://github.com/vigneshgv/dq-framework"
    },
    {
      title: "Hadoop Migration Tool",
      description: "Automation scripts for migrating legacy Teradata tables to Apache Hadoop ecosystem.",
      tech: ["Hadoop", "Teradata", "Shell"],
      github: "https://github.com/vigneshgv/migration-tool"
    },
    {
      title: "Real-time Stream Processor",
      description: "Kafka-based streaming application for real-time fraud detection in financial messages.",
      tech: ["Kafka", "Python", "Spark Streaming"],
      github: "https://github.com/vigneshgv/stream-processor"
    },
    {
      title: "Cloud Data Warehouse Sync",
      description: "Automated synchronization tool between on-premise relational databases and Snowflake cloud.",
      tech: ["Python", "Snowflake", "Airflow"],
      github: "https://github.com/vigneshgv/dw-sync"
    }
  ],
  education: [
    {
      degree: "B.E Bachelors Degree in Computer Science and Engineering",
      institution: "Anna University, Main campus Guindy, Chennai",
      period: "June 2023",
      details: "CPGA 8.8/10, First class with Distinction"
    },
    {
      degree: "HSLC, Major in computer science",
      institution: "Tamil Nadu State Government Exam",
      period: "May 2018",
      details: "1170/1200, Achieved centum in Mathematics and Physics"
    }
  ],
  additional: {
    languages: ["English", "Tamil", "Telugu"],
    certifications: [
      "Snowflake Handson Essential 5 badges",
      "Databricks Fundamentals certification & workshops"
    ],
    activities: [
      "Involvement in Gen AI hackathon",
      "Cybersecurity Hackathon"
    ]
  }
};

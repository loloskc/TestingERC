﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApi.Data;

namespace WebApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240306151154_delResId")]
    partial class delResId
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.17");

            modelBuilder.Entity("WebApi.Models.BankBook", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .HasColumnType("TEXT");

                    b.Property<string>("DateEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("DateStart")
                        .HasColumnType("TEXT");

                    b.Property<string>("Number")
                        .HasColumnType("TEXT");

                    b.Property<int>("Sqaure")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("Number")
                        .IsUnique();

                    b.ToTable("BankBooks");
                });

            modelBuilder.Entity("WebApi.Models.Resident", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("BankBookId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("FIO")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("BankBookId");

                    b.ToTable("Residents");
                });

            modelBuilder.Entity("WebApi.Models.Resident", b =>
                {
                    b.HasOne("WebApi.Models.BankBook", "BankBook")
                        .WithMany("Residents")
                        .HasForeignKey("BankBookId");

                    b.Navigation("BankBook");
                });

            modelBuilder.Entity("WebApi.Models.BankBook", b =>
                {
                    b.Navigation("Residents");
                });
#pragma warning restore 612, 618
        }
    }
}